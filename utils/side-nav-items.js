import FaqsIcon from "public/icones/faqs.svg";
import HeartIcon from "public/icones/heart.svg";
import AboutIcon from "public/icones/about.svg";

const sideNavItems = [
  {
    name: "سوالات متداول",
    path: "/faqs",
    repo: "faqs",
    icon: <FaqsIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "حمایت",
    path: "/sponsor",
    repo: "ceituut.github.io",
    icon: <HeartIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "انجمن",
    path: "/about",
    repo: "members",
    icon: <AboutIcon className="w-8 fill-gray-600" />,
  },
];

export default sideNavItems;
