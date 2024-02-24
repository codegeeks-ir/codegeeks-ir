import Navigation from "utils/schema/navigation.type";
import FoodIcon from "public/icones/food.svg";
import EducationIcon from "public/icones/education.svg";
import DormIcon from "public/icones/dorm.svg";
import InternetIcon from "public/icones/internet.svg";
import LibraryIcon from "public/icones/library.svg";

const sideNavItems: Navigation = [
  {
    name: "غذا",
    link: "https://food.uut.ac.ir/",
    repo: "docs",
    icon: <FoodIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "آموزش",
    link: "https://edu.uut.ac.ir/",
    repo: "codegeeks-ir",
    icon: <EducationIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "خوابگاه",
    link: "http://dorm.uut.ac.ir:81/",
    repo: "docs",
    icon: <DormIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "اینترنت",
    link: "http://internet.uut.ac.ir",
    repo: "docs",
    icon: <InternetIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "کتابخانه",
    link: "http://library.uut.ac.ir:81/",
    repo: "docs",
    icon: <LibraryIcon className="w-8 fill-slate-600" />,
  },
];

export default sideNavItems;
