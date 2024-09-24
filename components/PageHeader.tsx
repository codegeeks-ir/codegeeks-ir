"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BackIcon from "public/icons/back.svg";
import ForkIcon from "public/icons/fork.svg";
import HeartIcon from "public/icons/heart.svg";
import Icon from "./Icon";
import Navigation from "utils/schema/navigation.type";
import requirementsNavItem from "data/navigation/requirements-navigation";
import collectionsNavItems from "data/navigation/collections-navigation";
import config from "data/config";
import { useMemo } from "react";

const PageHeader = () => {
  const path = usePathname();
  const back = useMemo(
    () => path.split("/").slice(0, -1).join("/") + "/",
    [path]
  );
  const repo = useMemo(() => {
    const allLinks: Navigation = [
      ...requirementsNavItem,
      ...collectionsNavItems,
    ];
    const page = allLinks.find((item) => path.startsWith(item.link));
    if (page?.repo) return page.repo;
    else return config.repository;
  }, [path]);
  return (
    <section
      className={`page-header-navbar animate__animated
      ${path == "/" ? "invisible" : "animate__fadeInDown"} animate__faster`}
    >
      <Link className="page-header-navbar-button" href={back}>
        <BackIcon className="w-full fill-slate-600" />
      </Link>
      <Link className="page-header-navbar-button" href="/sponsor">
        <HeartIcon className="w-full fill-slate-600" />
      </Link>
      <Link
        className="page-header-navbar-button"
        href={`https://github.com/${config.github}/${repo}`}
        target="_blank"
      >
        <ForkIcon className="w-full fill-slate-600" />
      </Link>
      <Icon />
    </section>
  );
};

export default PageHeader;
