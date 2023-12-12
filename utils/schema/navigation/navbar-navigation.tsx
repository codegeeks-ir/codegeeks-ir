import HomeIcon from "public/icones/home.svg";
import RequirementsIcon from "public/icones/requirements.svg";
import ProfileIcon from "public/icones/profile.svg";
import Navigation from "./navigation-type";

const navbarItems: Navigation = [
  {
    name: "نیازمندیها",
    link: "/requirements",
    icon: <RequirementsIcon className="h-auto w-8 fill-slate-900" />,
  },
  {
    name: "صفحه‌اصلی",
    link: "/",
    icon: <HomeIcon className="h-auto w-8 fill-slate-900" />,
  },
  {
    name: "داشبورد",
    link: "/dashboard",
    icon: <ProfileIcon className="h-auto w-8 fill-slate-900" />,
  },
];

export default navbarItems;
