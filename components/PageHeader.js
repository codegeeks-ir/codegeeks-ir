import Link from "next/link";
import { useRouter } from "next/router";
import mainNavItems from "utils/main-nav-items";
import sideNavItems from "utils/side-nav-items";
import BackIcon from "public/icones/back.svg";
import ForkIcon from "public/icones/fork.svg";
import HeartIcon from "public/icones/heart.svg";
import Icon from "./Icon";
import requirementsNavItem from "utils/requirements-nav-items";
import courseNavItems from "utils/course-nav-items";

const getBackLink = () =>
  useRouter().asPath.split("/").slice(0, -1).join("/") + "/";

const getRepoName = () => {
  const router = useRouter();
  const mainPath = router.asPath.split("/")[1];
  const allLinks = [
    ...courseNavItems,
    ...requirementsNavItem,
    ...sideNavItems,
    ...mainNavItems,
  ];
  let page = allLinks.find((item) => item.link == router.asPath);
  if (page != null || page != undefined) return page.repo;
  else {
    page = allLinks.find((item) => item.link == `/${mainPath}`);
    if (page != null || page != undefined) return page.repo;
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
        <BackIcon className="w-full fill-gray-600" />
      </Link>
      <Link className="page-header-navbar-button" href="/sponsor">
        <HeartIcon className="w-full fill-gray-600" />
      </Link>
      <a className="page-header-navbar-button" href={contributionLink}>
        <ForkIcon className="w-full fill-gray-600" />
      </a>
      <Icon />
    </div>
  );
};

export default PageHeader;
