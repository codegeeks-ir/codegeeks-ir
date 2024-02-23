import EventsIcon from "public/icones/events.svg";
import ChallengesIcon from "public/icones/challenges.svg";
import ProjectsIcon from "public/icones/projects.svg";
import BlogIcon from "public/icones/blog.svg";
import Navigation from "./navigation-type";

const mainNavItems: Navigation = [
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
    name: "پروژه‌ها",
    link: "/projects",
    repo: "docs",
    icon: <ProjectsIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "انتشارات",
    link: "/collections/blog",
    repo: "docs",
    icon: <BlogIcon className="w-8 fill-slate-600" />,
  },
];

export default mainNavItems;
