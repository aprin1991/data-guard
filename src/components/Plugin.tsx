import { TPlugin } from "../types";
import { useParams } from "react-router-dom";

type TProps = {
  plugin: TPlugin;
  handleChange: (plugin: TPlugin, id: string) => void;
  index: number;
  active: boolean;
};

const Plugin = ({ plugin, handleChange, index, active }: TProps) => {
  const { id } = useParams();
  const handleToggle = (plugin: TPlugin) => {
    if (plugin.state === "disabled") return;

    handleChange(plugin, id ?? "");
  };
  const renderTitle = () => {
    switch (plugin.state) {
      case "active":
        return "Allowed";
      case "inactive":
        return "Blocked";
      default:
        return "Disabled";
    }
  };
  return (
    <div
      className={`tab-content__item ${
        plugin.state === "disabled" ? "disabled" : ""
      } ${plugin.state === "inactive" ? "inactive" : ""} `}
      key={plugin.slug}
    >
      <h1>
        <span>{plugin.title}</span>
        <div className="tab-content__switch">
          <input type="checkbox" id={`checkbox${index}`} />
          <label
            onClick={() => handleToggle(plugin)}
            htmlFor={`checkbox${index}`}
            className={`${active ? "active" : ""} ${
              plugin.state === "disabled" ? "disabled" : ""
            }`}
          ></label>
          <span className={`plugin-state ${renderTitle()} `}>
            {renderTitle()}
          </span>
        </div>
      </h1>
      <p>{plugin.description}</p>
    </div>
  );
};

export default Plugin;
