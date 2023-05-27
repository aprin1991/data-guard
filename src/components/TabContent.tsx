import { TPlugin } from "../types";
import Plugin from "./Plugin";

type TPlusings = {
  plugins: TPlugin[];
};

const TabContent = ({ plugins }: TPlusings) => {
  return (
    <div className="content">
      <h1 className="main-title">"Finance"</h1>
      <div className="tab-content">
        {plugins?.map((plugin: TPlugin) => (
          <Plugin key={plugin.slug} plugin={plugin} />
        ))}
      </div>
    </div>
  );
};

export default TabContent;
