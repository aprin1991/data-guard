import { TPlugin } from "../types";

type TPluginProps = {
  plugin: TPlugin;
};

const Plugin = ({ plugin }: TPluginProps) => {
  const renderClass = () => {
    switch (plugin.state) {
      case "active":
        return "active";
      case "inactive":
        return "blocked";
      case "disabled":
        return "disabled";
      default:
        return "active";
    }
  };

  return (
    <div className="tab-content__item">
      <h1>
        <span>{plugin.title}</span>
        <div className="tab-content__switch">
          <label className={`${renderClass()}`}></label>
          <span
            className={`plugin-state ${
              plugin.state === "active" ? "active" : "blocked"
            } `}
          >
            Allowed
          </span>
        </div>
      </h1>
      <p>{plugin.description}</p>
    </div>
  );
};

export default Plugin;
