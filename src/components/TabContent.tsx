import useDataContext from "../hooks/useDataContext";
import { TContent, TPlugin, TTab } from "../types";
import Loading from "./Loading";
import Plugin from "./Plugin";

type TTabContentProps = {
  plugins: TContent[] | null;
  handleChange: (plugin: TPlugin, id: string) => void;
  currentTab: TTab | null;
};

const TabContent = ({
  plugins,
  handleChange,
  currentTab,
}: TTabContentProps) => {
  const { contentLoading } = useDataContext();
  return (
    <div className="plugins">
      <h1 className="main-title">{currentTab?.title}</h1>
      {contentLoading ? <Loading /> : null}
      <div className="tab-content">
        {plugins?.map((plugin: TPlugin, index: number) => (
          <Plugin
            key={plugin.slug}
            plugin={plugin}
            handleChange={handleChange}
            index={index}
            active={plugin.state === "active"}
          />
        ))}
      </div>
    </div>
  );
};

export default TabContent;
