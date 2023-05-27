import { useMemo } from "react";
import Finance from "./../../assets/images/icon-finance.svg";
import Marketing from "./../../assets/images/icon-marketing.svg";
import Personnel from "./../../assets/images/icon-people.svg";

const SidebarIcon = ({ icon }: { icon: string }) => {
  const renderIcon = useMemo(() => {
    switch (icon) {
      case "Finance":
        return Finance;
      case "Marketing":
        return Marketing;
      case "Personnel":
        return Personnel;
      default:
        return "";
    }
  }, [icon]);

  return <img src={renderIcon} alt="icon" />;
};

export default SidebarIcon;
