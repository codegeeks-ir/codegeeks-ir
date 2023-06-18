import EventsIcon from "public/icones/events.svg";
import ChallengesIcon from "public/icones/challenges.svg";
import ProjectsIcon from "public/icones/projects.svg";
import BlogIcon from "public/icones/blog.svg";

const mainNavItems = [
  {
    name: "رویدادها",
    link: "/events",
    repo: "events",
    icon: <EventsIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "مسابقات",
    link: "/challenges",
    repo: "challenges",
    icon: <ChallengesIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "پروژه‌ها",
    link: "/projects",
    repo: "projects",
    icon: <ProjectsIcon className="w-8 fill-slate-600" />,
  },
  {
    name: "انتشارات",
    link: "/blog",
    repo: "posts",
    icon: <BlogIcon className="w-8 fill-slate-600" />,
  },
];

export default mainNavItems;
