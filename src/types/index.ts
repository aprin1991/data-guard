type TTab = {
  icon: string;
  title: string;
  slug: string;
};

type TPlugin = Record<string, string>;

type TContent = {
  description?: string;
  slug?: string;
  state?: string;
  title?: string;
};

type TTabData = Record<
  string,
  {
    id: string;
    title: string;
    icon: string;
    active: string[];
    disabled: string[];
    inactive: string[];
  }
>;

type TData = {
  tabs: string[];

  tabdata: TTabData;

  plugins: Record<string, TPlugin>;
};

export type { TTab, TData, TPlugin, TContent, TTabData };
