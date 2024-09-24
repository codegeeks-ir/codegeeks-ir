import ContactsIcon from "public/icons/contacts.svg";
import CurriculumGuideIcon from "public/icons/curriculum-guide.svg";
import CoursesIcon from "public/icons/courses.svg";
import BusStopTimesIcon from "public/icons/bus-stop-times.svg";
import Navigation from "utils/schema/navigation.type";
import FoodIcon from "public/icons/food.svg";
import EducationIcon from "public/icons/education.svg";
import DormIcon from "public/icons/dorm.svg";
import InternetIcon from "public/icons/internet.svg";
import LibraryIcon from "public/icons/library.svg";

const requirementsNavItem: Navigation = [
  {
    name: "دفترچه تماس",
    link: "/requirements/contacts",
    repo: "docs",
    icon: <ContactsIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "چارت",
    link: "/requirements/curriculum-guide",
    repo: "docs",
    icon: <CurriculumGuideIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "همیار واحد",
    link: "https://hamyar.codegeeks.ir/",
    icon: <EducationIcon className="w-8 fill-slate-600" />,
    repo: "sub",
  },
  {
    name: "یادآوری غذا",
    link: "https://food.codegeeks.ir/",
    icon: <FoodIcon className="w-8 fill-slate-600" />,
    repo: "sub",
  },
  {
    name: "دروس",
    link: "/requirements/courses",
    repo: "courses",
    icon: <CoursesIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "سرویس‌",
    link: "/requirements/bus-stop-times",
    repo: "docs",
    icon: <BusStopTimesIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "کتابخانه",
    link: "http://library.uut.ac.ir:81/",
    icon: <LibraryIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "خوابگاه",
    link: "http://dorm.uut.ac.ir:81/",
    icon: <DormIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "غذا",
    link: "https://food.uut.ac.ir/",
    icon: <FoodIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "اینترنت",
    link: "http://internet.uut.ac.ir",
    icon: <InternetIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "آموزش",
    link: "https://edu.uut.ac.ir/",
    icon: <EducationIcon className="w-8 fill-slate-600" />,
  },
];

export default requirementsNavItem;
