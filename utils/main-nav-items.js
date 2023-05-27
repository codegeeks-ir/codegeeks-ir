import EventsIcon from "public/icones/events.svg";
import ChallengesIcon from "public/icones/challenges.svg";
import ProjectsIcon from "public/icones/projects.svg";
import BlogIcon from "public/icones/blog.svg";

const mainNavItems = [
  {
    name: "رویدادها",
    path: "/events",
    repo: "events",
    icon: <EventsIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "مسابقات",
    path: "/challenges",
    repo: "challenges",
    icon: <ChallengesIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "پروژه‌ها",
    path: "/projects",
    repo: "projects",
    icon: <ProjectsIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "انتشارات",
    path: "/blog",
    repo: "posts",
    icon: <BlogIcon className="w-8 fill-gray-600" />,
  },
];

export default mainNavItems;