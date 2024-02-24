import EventsIcon from "public/icones/events.svg";
import ChallengesIcon from "public/icones/challenges.svg";
import BlogIcon from "public/icones/blog.svg";
import Navigation from "utils/schema/navigation.type";
import FaqsIcon from "public/icones/faqs.svg";

const collectionsNavItems: Navigation = [
  {
    name: "رویدادها",
    link: "/collections/events",
    repo: "docs",
    icon: <EventsIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "مسابقات",
    link: "/collections/challenges",
    repo: "docs",
    icon: <ChallengesIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "انتشارات",
    link: "/collections/blog",
    repo: "docs",
    icon: <BlogIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "سوالات متداول",
    link: "/collections/faqs",
    repo: "docs",
    icon: <FaqsIcon className="w-8 fill-slate-600" />,
  },
];

export default collectionsNavItems;
