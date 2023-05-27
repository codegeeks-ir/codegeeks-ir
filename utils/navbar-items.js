import HomeIcon from "public/icones/home.svg";
import RequirementsIcon from "public/icones/requirements.svg";
import ProfileIcon from "public/icones/profile.svg";

const navbarItems = [
  {
    category: "navbar",
    path: "/requirements",
    repo: "requirements",
    icon: <RequirementsIcon className="fill-gray-900 w-8 h-auto" />,
  },
  {
    category: "navbar",
    path: "/",
    repo: "ceituut.github.io",
    icon: <HomeIcon className="fill-gray-900 w-8 h-auto" />,
  },
  {
    category: "navbar",
    path: "/account",
    repo: "ceituut.github.io",
    icon: <ProfileIcon className="fill-gray-900 w-8 h-auto" />,
  },
];

export default navbarItems;