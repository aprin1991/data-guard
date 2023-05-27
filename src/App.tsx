import { Dispatch, SetStateAction, createContext, useState } from "react";
import { TData } from "./types";

import "./assets/style.scss";
import MemoizedLayout from "./layout";

type TContext = {
  data: TData | null;
  setData: Dispatch<SetStateAction<TData | null>>;
  setSidebarLoading: Dispatch<SetStateAction<boolean>>;
  setContentLoading: Dispatch<SetStateAction<boolean>>;
  sidebarLoading: boolean;
  contentLoading: boolean;
} | null;

export const DataContext = createContext<TContext>(null);

function App() {
  const [data, setData] = useState<TData | null>(null);
  const [sidebarLoading, setSidebarLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(true);
  return (
    <div>
      <DataContext.Provider
        value={{
          data,
          setData,
          sidebarLoading,
          setSidebarLoading,
          setContentLoading,
          contentLoading,
        }}
      >
        <MemoizedLayout />
      </DataContext.Provider>
    </div>
  );
}

export default App;
