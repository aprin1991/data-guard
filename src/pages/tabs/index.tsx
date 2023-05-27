import Sidebar from "../../components/Sidebar";
import TabContent from "../../components/TabContent";
const tabs = [
  {
    title: "tab1",
    icon: "",
    slug: "tab1",
  },
  {
    title: "tab2",
    icon: "",
    slug: "tab2",
  },
  {
    title: "tab3",
    icon: "",
    slug: "tab3",
  },
];
const content = [
  {
    description: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
    slug: "plugin1",
    state: "active",
    title: "Plugin1",
  },
  {
    description: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
    slug: "plugin1",
    state: "active",
    title: "Plugin1",
  },
  {
    description: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
    slug: "plugin1",
    state: "active",
    title: "Plugin1",
  },
  {
    description: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
    slug: "plugin1",
    state: "active",
    title: "Plugin1",
  },
  {
    description: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
    slug: "plugin1",
    state: "active",
    title: "Plugin1",
  },
  {
    description:
      "Proident sunt consequat exercitation incididunt cupidatat quis ut ut eu ullamco nisi excepteur aliqua.",
    slug: "plugin1",
    state: "active",
    title: "Plugin1",
  },
];
const Tabs = () => {
  return (
    <div className="main-container">
      <Sidebar tabs={tabs} />
      <TabContent plugins={content} />
    </div>
  );
};

export default Tabs;
