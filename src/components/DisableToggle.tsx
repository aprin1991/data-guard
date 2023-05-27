import { useState, useEffect } from "react";
import useDataContext from "../hooks/useDataContext";
import { useParams } from "react-router-dom";
import { updateTabsData } from "../services/tabsServices";
type TProps = {
  getData?(): void;
};

const DisableToggle = ({ getData }: TProps) => {
  const [actived, setActived] = useState(true);
  const { data } = useDataContext();
  const { id } = useParams();
  useEffect(() => {
    const localPersist = localStorage.getItem("pluginToggle");
    if (localPersist) {
      const persistActive = JSON.parse(localPersist);

      setActived(persistActive);
    }
  }, []);

  const handleToggleActive = async (isActived: boolean) => {
    setActived((prev) => !prev);
    if (data && id?.includes("tab")) {
      const { tabdata } = data;

      for (const key in tabdata) {
        const { active, inactive } = tabdata[key];
        if (isActived) {
          tabdata[key]["active"] = tabdata[key]["active"].concat(inactive);

          tabdata[key]["inactive"] = [];
        } else {
          tabdata[key]["inactive"] = tabdata[key]["inactive"].concat(active);
          tabdata[key]["active"] = [];
        }
      }
      localStorage.setItem("pluginToggle", JSON.stringify(isActived));
      const response = await updateTabsData(data["tabdata"]);

      if (response) {
        getData?.();
      }
    }
  };

  return (
    <div className={`disable-switcher ${!actived ? "disabled " : ""}`}>
      <span>All plugins {actived ? "enabled" : "disabled"}</span>
      <button onClick={() => handleToggleActive(!actived)}>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="grid_system" />

          <g id="_icons">
            <g>
              <path d="M16.6,4.2c-0.5-0.3-1.1-0.1-1.4,0.4c-0.3,0.5-0.1,1.1,0.4,1.4c2.1,1.3,3.5,3.6,3.5,6c0,3.9-3.1,7-7,7s-7-3.1-7-7    c0-2.5,1.4-4.8,3.5-6.1C9,5.6,9.2,5,8.9,4.6C8.6,4.1,8,3.9,7.5,4.2C4.7,5.8,3,8.8,3,12c0,5,4,9,9,9s9-4,9-9    C21,8.8,19.3,5.9,16.6,4.2z" />

              <path d="M12,13c0.6,0,1-0.4,1-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v9C11,12.6,11.4,13,12,13z" />
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default DisableToggle;
