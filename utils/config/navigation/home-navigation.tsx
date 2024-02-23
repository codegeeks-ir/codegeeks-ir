import ProjectsIcon from "public/icones/projects.svg";
import Navigation from "utils/schema/navigation.type";
import HeartIcon from "public/icones/heart.svg";
import AboutIcon from "public/icones/about.svg";

const homeNavItems: Navigation = [
  {
    name: "پروژه‌ها",
    link: "/projects",
    repo: "docs",
    icon: <ProjectsIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "حمایت",
    link: "/sponsor",
    repo: "codegeeks-ir",
    icon: <HeartIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "انجمن",
    link: "/about",
    repo: "docs",
    icon: <AboutIcon className="w-8 fill-slate-600" />,
  },
];

export default homeNavItems;
