import Link from "next/link";
import EventsIcon from "public/icones/events.svg";
import ChallengesIcon from "public/icones/challenges.svg";
import ProjectsIcon from "public/icones/projects.svg";
import BlogIcon from "public/icones/blog.svg";
import FaqsIcon from "public/icones/faqs.svg";
import HeartIcon from "public/icones/heart.svg";
import AboutIcon from "public/icones/about.svg";

const Sections = () => {
  return (
    <div className="flex flex-col items-center justify-evenly w-full h-full grow-1 my-4">
      <ul className="sections bg-indigo-500">
        <li className="section-item">
          <Link className="section-link" href="/events">
            <EventsIcon className="w-8 fill-gray-600" />
            <span className="text-xs pt-1">رویدادها</span>
          </Link>
        </li>
        <li className="section-item">
          <Link className="section-link" href="/challenges">
            <ChallengesIcon className="w-8 fill-gray-600" />
            <span className="text-xs pt-1">مسابقات</span>
          </Link>
        </li>
        <li className="section-item">
          <Link className="section-link" href="/projects">
            <ProjectsIcon className="w-8 fill-gray-600" />
            <span className="text-xs pt-1">پروژه‌ها</span>
          </Link>
        </li>
        <li className="section-item">
          <Link className="section-link" href="/blog">
            <BlogIcon className="w-8 fill-gray-600" />
            <span className="text-xs pt-1">انتشارات</span>
          </Link>
        </li>
      </ul>
      <ul className="sections bg-violet-500">
        <li className="section-item">
          <Link className="section-link" href="/faqs">
            <FaqsIcon className="w-8 fill-gray-600" />
            <span className="text-xs pt-1">سوالات‌متداول</span>
          </Link>
        </li>
        <li className="section-item">
          <Link className="section-link" href="/sponsor">
            <HeartIcon className="w-8 fill-gray-600" />
            <span className="text-xs pt-1">حمایت</span>
          </Link>
        </li>
        <li className="section-item">
          <Link className="section-link" href="/about">
            <AboutIcon className="w-8 fill-gray-600" />
            <span className="text-xs pt-1">درباره‌ما</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sections;
