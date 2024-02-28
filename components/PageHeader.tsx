"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BackIcon from "public/icones/back.svg";
import ForkIcon from "public/icones/fork.svg";
import HeartIcon from "public/icones/heart.svg";
import Icon from "./Icon";
import Navigation from "utils/schema/navigation.type";
import requirementsNavItem from "data/navigation/requirements-navigation";
import collectionsNavItems from "data/navigation/collections-navigation";
import config from "data/config";

const getBackLink = (): string =>
  usePathname().split("/").slice(0, -1).join("/") + "/";

const getRepoName = (): string => {
  const allLinks: Navigation = [...requirementsNavItem, ...collectionsNavItems];
  const page = allLinks.find((item) => usePathname().startsWith(item.link));
  if (page?.repo) return page.repo;
  else return config.repository;
};

const PageHeader = () => {
  const back = getBackLink();
  const repo = getRepoName();
  const contributionLink = `https://github.com/codegeeks-ir/${repo}`;
  return (
    <>
      {usePathname() != "/" && (
        <section className="page-header-navbar">
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
        </section>
      )}
    </>
  );
};

export default PageHeader;
