import { useEffect, memo, useState, useCallback } from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "../pages";
import Tabs from "../pages/tabs";
import { getData } from "../services/tabsServices";
import useDataContext from "../hooks/useDataContext";
import { TTab } from "../types";

const Layout = () => {
  const [tabs, setTabs] = useState<TTab[]>([]);
  const [currentTab, setCurrentTab] = useState<TTab | null>(null);
  const { data, setData, setSidebarLoading, setContentLoading } =
    useDataContext();

  const fetchData = useCallback(async () => {
    setContentLoading(true);
    const data = await getData();
    const tempTabsData: TTab[] = [];
    setData(data);
    setSidebarLoading(false);
    setContentLoading(false);
    for (const val of data.tabs) {
      const item = data.tabdata[val];

      tempTabsData.push({
        icon: item?.["icon"],
        title: item?.["title"],
        slug: val,
      });
    }
    setTabs(tempTabsData);
  }, [setData, setSidebarLoading, setContentLoading]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage tabs={tabs} setCurrentTab={setCurrentTab} />}
        />
        <Route
          path="/tabs/:id"
          element={
            <Tabs
              tabs={tabs}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              data={data}
            />
          }
        />
      </Routes>
    </div>
  );
};

const MemoizedLayout = memo(Layout);

export default MemoizedLayout;
