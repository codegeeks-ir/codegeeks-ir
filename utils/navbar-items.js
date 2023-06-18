import HomeIcon from "public/icones/home.svg";
import RequirementsIcon from "public/icones/requirements.svg";
import ProfileIcon from "public/icones/profile.svg";

const navbarItems = [
  {
    category: "navbar",
    link: "/requirements",
    repo: "requirements",
    icon: <RequirementsIcon className="fill-slate-900 w-8 h-auto" />,
  },
  {
    category: "navbar",
    link: "/",
    repo: "codegeeks-ir",
    icon: <HomeIcon className="fill-slate-900 w-8 h-auto" />,
  },
  {
    category: "navbar",
    link: "/account",
    repo: "codegeeks-ir",
    icon: <ProfileIcon className="fill-slate-900 w-8 h-auto" />,
  },
];

export default navbarItems;
