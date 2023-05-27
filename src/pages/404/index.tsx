import Sidebar from "../../components/Sidebar";
import { TTab } from "../../types";
import { Link } from "react-router-dom";

type THomeProps = {
  tabs: TTab[];
  setCurrentTab: (tab: TTab) => void;
};

const NotFound = ({ tabs, setCurrentTab }: THomeProps) => {
  return (
    <div className="main-container">
      <Sidebar tabs={tabs} setCurrentTab={setCurrentTab} />

      <div className="not-found">
        <p>404 Page not found</p>
        <Link className="back-home" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
