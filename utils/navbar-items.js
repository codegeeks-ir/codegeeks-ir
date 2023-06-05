import HomeIcon from "public/icones/home.svg";
import RequirementsIcon from "public/icones/requirements.svg";
import ProfileIcon from "public/icones/profile.svg";

const navbarItems = [
  {
    category: "navbar",
    link: "/requirements",
    repo: "requirements",
    icon: <RequirementsIcon className="fill-gray-900 w-8 h-auto" />,
  },
  {
    category: "navbar",
    link: "/",
    repo: "codegeeks",
    icon: <HomeIcon className="fill-gray-900 w-8 h-auto" />,
  },
  {
    category: "navbar",
    link: "/account",
    repo: "codegeeks",
    icon: <ProfileIcon className="fill-gray-900 w-8 h-auto" />,
  },
];

export default navbarItems;
