import { Link, useParams } from "react-router-dom";

import Logo from "./../assets/images/logo.svg";
import SidebarIcon from "./icons";
import DisableToggle from "./DisableToggle";
import { TTab } from "../types";
import SidebarSkeleton from "./SidebarSkeleton";
import useDataContext from "../hooks/useDataContext";

type TProps = {
  setCurrentTab(tab: TTab): void;
  tabs: Array<{
    icon: string;
    title: string;
    slug: string;
  }>;
  getData?(): void;
};
const Sidebar = ({ tabs, setCurrentTab, getData }: TProps) => {
  const { id } = useParams();
  const { sidebarLoading } = useDataContext();
  return (
    <div className="sidebar">
      <Link to="/" className="logo">
        <img src={`${Logo}`} alt="Logo" />
      </Link>
      <div className="tab-items">
        {sidebarLoading ? (
          <SidebarSkeleton />
        ) : (
          tabs.map((tab) => (
            <Link
              key={tab.slug}
              to={`/tabs/${tab.slug}`}
              className={`tab-item ${id === tab.slug ? "active" : ""}`}
              onClick={() => setCurrentTab(tab)}
            >
              <figure>
                <SidebarIcon icon={tab.title} />
              </figure>
              <span>{tab.title}</span>
            </Link>
          ))
        )}
      </div>
      {id ? <DisableToggle getData={getData} /> : null}
    </div>
  );
};
export default Sidebar;
