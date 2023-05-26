import Link from "next/link";
import { useRouter } from "next/router";
import { linkProperties } from "utils/config";
import BackIcon from "public/icones/back.svg";
import ForkIcon from "public/icones/fork.svg";
import HeartIcon from "public/icones/heart.svg";
import Icon from "./Icon";

function getBackLink() {
  const router = useRouter();
  const lastSlashIndex = router.pathname.lastIndexOf("/");
  return router.pathname.substring(0, lastSlashIndex + 1);
}

function getRepoName() {
  const router = useRouter();
  const mainPath = router.pathname.split("/")[1];
  const currentPage = linkProperties.find((page) => page.path == `/${mainPath}`);
  if (currentPage != null || currentPage != undefined) return currentPage.repo;
  else return "ceituut.github.io";
}

export default function PageHeader() {
  const back = getBackLink();
  const repo = getRepoName();
  const contributionLink = `https://github.com/ceituut/${repo}`;
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
}
