import HomeIcon from "public/icones/home.svg";
import CollectionsIcon from "public/icones/collections.svg";
import RequirementsIcon from "public/icones/requirements.svg";
import ProfileIcon from "public/icones/profile.svg";
import Navigation from "utils/schema/navigation.type";

const navbarItems: Navigation = [
  {
    name: "نیازمندیها",
    link: "/requirements",
    icon: <RequirementsIcon className="h-auto w-8 fill-slate-600" />,
  },
  {
    name: "مجموعه‌ها",
    link: "/collections",
    icon: <CollectionsIcon className="h-auto w-8 fill-slate-600" />,
  },
  {
    name: "صفحه اصلی",
    link: "/",
    icon: <HomeIcon className="h-auto w-8 fill-slate-600" />,
  },
  // {
  //   name: "داشبورد",
  //   link: "/dashboard",
  //   icon: <ProfileIcon className="h-auto w-8 fill-slate-600" />,
  // },
];

export default navbarItems;
