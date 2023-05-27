import { useEffect, useCallback, useState } from "react";
import Sidebar from "../../components/Sidebar";
import TabContent from "../../components/TabContent";
import { getTabData, updateTabsData } from "../../services/tabsServices";
import { TContent, TData, TPlugin, TTab } from "../../types";
import { useParams } from "react-router-dom";
import useDataContext from "../../hooks/useDataContext";
type TTabsProps = {
  tabs: TTab[];
  currentTab: TTab | null;
  setCurrentTab: (tab: TTab) => void;
  data: TData | null;
};

const Tabs = ({ tabs, currentTab, setCurrentTab, data }: TTabsProps) => {
  const [plugins, setPlugins] = useState<TContent[]>([]);
  const { id } = useParams();
  const { setContentLoading } = useDataContext();

  const getTabDetail = useCallback(async () => {
    setContentLoading(true);
    const res = await getTabData();

    const tab = res[id ?? "tab1"];
    if (tab) {
      const { active, inactive, disabled } = tab;
      const plugins = data?.plugins;
      const pluginData = [];
      for (const value of active) {
        pluginData.push({
          state: "active",
          title: plugins?.[value]?.["title"],
          description: plugins?.[value]["description"],
          slug: value,
        });
      }
      for (const value of inactive) {
        pluginData.push({
          state: "inactive",
          title: plugins?.[value]["title"],
          description: plugins?.[value]["description"],
          slug: value,
        });
      }
      for (const value of disabled) {
        pluginData.push({
          state: "disabled",
          title: plugins?.[value]["title"],
          description: plugins?.[value]["description"],
          slug: value,
        });
      }
      pluginData.sort((a, b) =>
        a.slug > b.slug ? 1 : b.slug > a.slug ? -1 : 0
      );
      setPlugins(pluginData);
      setContentLoading(false);
    }
  }, [id, data?.plugins, setContentLoading]);

  useEffect(() => {
    if (data && id) {
      getTabDetail();
      const foundedTab = tabs.find((el) => el.slug === id);
      if (foundedTab) {
        setCurrentTab(foundedTab);
      }
    }
  }, [id, data, getTabDetail, setCurrentTab, tabs]);

  const handleChange = async (plugin: TPlugin, id: string) => {
    const { slug, state } = plugin;
    const tabData = data?.tabdata;
    const tab = tabData?.[id];

    if (tab) {
      const index = state === "active" ? "active" : "inactive";
      tab[index] = tab[index].filter((el: string) => el !== slug);
      tab[state === "active" ? "inactive" : "active"].push(slug);
    }

    setContentLoading(true);
    const response = await updateTabsData(tabData);

    if (response) {
      getTabDetail();
    }
  };

  return (
    <div className="main-container">
      <Sidebar
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        getData={getTabDetail}
      />
      <TabContent
        plugins={plugins}
        currentTab={currentTab}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Tabs;
