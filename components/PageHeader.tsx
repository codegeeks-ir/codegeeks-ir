"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BackIcon from "public/icones/back.svg";
import ForkIcon from "public/icones/fork.svg";
import HeartIcon from "public/icones/heart.svg";
import Icon from "./Icon";
import Navigation from "utils/schema/navigation/navigation-type";
import courseNavItems from "utils/schema/navigation/course-navigation";
import requirementsNavItem from "utils/schema/navigation/requirements-navigation";
import mainNavItems from "utils/schema/navigation/main-navigation";
import sideNavItems from "utils/schema/navigation/side-navigation";

const getBackLink = (): string =>
  usePathname().split("/").slice(0, -1).join("/") + "/";

const getRepoName = (): string => {
  const mainPath = usePathname().split("/")[1];
  const allLinks: Navigation = [
    ...courseNavItems,
    ...requirementsNavItem,
    ...sideNavItems,
    ...mainNavItems,
  ];
  let page = allLinks.find((item) => item.link == usePathname());
  if (page?.repo) return page.repo;
  else {
    page = allLinks.find((item) => item.link == `/${mainPath}`);
    if (page?.repo) return page.repo;
    else return "codegeeks-ir";
  }
};

const PageHeader = () => {
  const back = getBackLink();
  const repo = getRepoName();
  const contributionLink = `https://github.com/codegeeks-ir/${repo}`;
  return (
    <div className="page-header-navbar">
      <Link className="page-header-navbar-button" href={back}>
        <BackIcon className="w-full fill-slate-600" />
      </Link>
      <Link className="page-header-navbar-button" href="/sponsor">
        <HeartIcon className="w-full fill-slate-600" />
      </Link>
      <a className="page-header-navbar-button" href={contributionLink}>
        <ForkIcon className="w-full fill-slate-600" />
      </a>
      <Icon />
    </div>
  );
};

export default PageHeader;
