import { TTab } from "./../types";
import { Link, useParams } from "react-router-dom";
import Logo from "./../assets/images/logo.svg";

type TProps = {
  tabs: TTab[];
};
const Sidebar = ({ tabs }: TProps) => {
  const { id } = useParams();
  console.log("hamed");

  return (
    <div className="sidebar">
      <Link to="/" className="logo">
        <img src={`${Logo}`} alt="Logo" />
      </Link>
      <div className="tab-items">
        {tabs.map((tab) => {
          return (
            <Link
              to={`/tabs/${tab.slug}`}
              key={tab.slug}
              className={`tab-item ${id === tab.slug ? "active" : ""}`}
            >
              <div className="tab-item">{tab.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
