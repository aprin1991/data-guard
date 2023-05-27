import { useContext } from "react";
import { DataContext } from "../App";

function useDataContext() {
  const context = useContext(DataContext);
  if (context === null) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
}

export default useDataContext;
