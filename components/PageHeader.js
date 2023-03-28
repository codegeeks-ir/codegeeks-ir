import Link from "next/link";
import { useRouter } from "next/router";
import { pages } from "pages/_app";

function getBackLink() {
  const router = useRouter();
  const lastSlashIndex = router.pathname.lastIndexOf("/");
  return router.pathname.substring(0, lastSlashIndex + 1);
}

function getRepoName() {
  const router = useRouter();
  const mainPath = router.pathname.split("/")[1];
  const currentPage = pages.find((page) => page.path == `/${mainPath}`);
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
        <p>بازگشت</p>
      </Link>
      <a className="page-header-navbar-button" href={contributionLink}>
        <p>مشارکت</p>
      </a>
    </div>
  );
}
