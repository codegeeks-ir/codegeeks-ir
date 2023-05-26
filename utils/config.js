// Website main icones
import EventsIcon from "public/icones/events.svg";
import ChallengesIcon from "public/icones/challenges.svg";
import ProjectsIcon from "public/icones/projects.svg";
import BlogIcon from "public/icones/blog.svg";
import FaqsIcon from "public/icones/faqs.svg";
import HeartIcon from "public/icones/heart.svg";
import AboutIcon from "public/icones/about.svg";
import ContactsIcon from "public/icones/contacts.svg";
import CurriculumGuideIcon from "public/icones/curriculum-guide.svg";

// Social icones
import GithubIcon from "public/icones/social/github.svg";
import InstagramIcon from "public/icones/social/instagram.svg";
import TelegramIcon from "public/icones/social/telegram.svg";
import YoutubeIcon from "public/icones/social/youtube.svg";

export const config = {
  title: "کامپیوتر صنعتی ارومیه",
  email: "ceit.uut@gmail.com",
  url: "https://codegeeks.ir",
  api: "https://api.codegeeks.ir/",
  testApi: "https://test.codegeeks.ir/",
  github: "ceituut",
};

export const linkProperties = [
  {
    path: "/requirements",
    repo: "requirements",
  },
  {
    path: "/",
    repo: "ceituut.github.io",
  },
  {
    name: "رویدادها",
    category: "main",
    path: "/events",
    repo: "events",
    icon: <EventsIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "مسابقات",
    category: "main",
    path: "/challenges",
    repo: "challenges",
    icon: <ChallengesIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "پروژه‌ها",
    category: "main",
    path: "/projects",
    repo: "projects",
    icon: <ProjectsIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "انتشارات",
    category: "main",
    path: "/blog",
    repo: "posts",
    icon: <BlogIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "سوالات متداول",
    category: "side",
    path: "/faqs",
    repo: "faqs",
    icon: <FaqsIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "حمایت",
    category: "side",
    path: "/sponsor",
    repo: "ceituut.github.io",
    icon: <HeartIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "انجمن",
    category: "side",
    path: "/about",
    repo: "members",
    icon: <AboutIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "دفترچه تماس",
    category: "requirements",
    path: "/requirements/contacts",
    repo: "requirements",
    icon: <ContactsIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "چارت درسی",
    category: "requirements",
    path: "/requirements/curriculum-guide",
    repo: "requirements",
    icon: <CurriculumGuideIcon className="w-8 fill-gray-600" />,
  },
];

export const socialLinkProperties = [
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UCVHy7Dv9vkf3zt0_P2J5vLw",
    icon: <YoutubeIcon className="fill-gray-400 w-4 h-auto" />,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/ceit_uut",
    icon: <InstagramIcon className="fill-gray-400 w-4 h-auto" />,
  },
  {
    name: "telegram",
    link: "https://t.me/ceit_uut",
    icon: <TelegramIcon className="fill-gray-400 w-4 h-auto" />,
  },
  {
    name: "github",
    link: "https://github.com/ceituut",
    icon: <GithubIcon className="fill-gray-400 w-4 h-auto" />,
  },
];
