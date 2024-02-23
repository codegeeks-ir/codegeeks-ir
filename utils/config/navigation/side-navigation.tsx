import FaqsIcon from "public/icones/faqs.svg";
import HeartIcon from "public/icones/heart.svg";
import AboutIcon from "public/icones/about.svg";
import Navigation from "./navigation-type";

const sideNavItems: Navigation = [
  {
    name: "سوالات متداول",
    link: "/collections/faqs",
    repo: "docs",
    icon: <FaqsIcon className="w-8 fill-slate-600" />,
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

export default sideNavItems;
