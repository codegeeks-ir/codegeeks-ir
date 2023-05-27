import ContactsIcon from "public/icones/contacts.svg";
import CurriculumGuideIcon from "public/icones/curriculum-guide.svg";

const requirementsNavItem = [
  {
    name: "دفترچه تماس",
    path: "/requirements/contacts",
    repo: "requirements",
    icon: <ContactsIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "چارت درسی",
    path: "/requirements/curriculum-guide",
    repo: "requirements",
    icon: <CurriculumGuideIcon className="w-8 fill-gray-600" />,
  },
];

export default requirementsNavItem;
