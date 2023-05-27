import Sidebar from "../components/Sidebar";
import { TTab } from "../types";

type THomeProps = {
  tabs: TTab[];
  setCurrentTab: (tab: TTab) => void;
};
const HomePage = ({ tabs, setCurrentTab }: THomeProps) => {
  return (
    <div className="main-container">
      <Sidebar tabs={tabs} setCurrentTab={setCurrentTab} />
      <div className="main-page-container">
        <h2>Welcome to the Mock API Server!</h2>
        <p>Select a tab from the sidebar to view its content.</p>
      </div>
    </div>
  );
};

export default HomePage;
