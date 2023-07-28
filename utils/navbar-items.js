import HomeIcon from "public/icones/home.svg";
import RequirementsIcon from "public/icones/requirements.svg";
import ProfileIcon from "public/icones/profile.svg";

const navbarItems = [
  {
    category: "navbar",
    link: "/requirements",
    repo: "requirements",
    icon: <RequirementsIcon className="h-auto w-8 fill-slate-900" />,
  },
  {
    category: "navbar",
    link: "/",
    repo: "codegeeks-ir",
    icon: <HomeIcon className="h-auto w-8 fill-slate-900" />,
  },
  {
    category: "navbar",
    link: "/account",
    repo: "codegeeks-ir",
    icon: <ProfileIcon className="h-auto w-8 fill-slate-900" />,
  },
];

export default navbarItems;
