import Link from "next/link";
import { useRouter } from "next/router";
import codegeeksIcon from "public/icones/codegeeks/codegeeks-icon.svg";

const isHomePage = () => {
  const router = useRouter();
  return router.pathname == "/";
};

const Icon = () => {
  return (
    <div className={`logo ${isHomePage() ? "invisible" : ""}`}>
      <Link href="/">
        <codegeeksIcon className="fill-slate-200 w-16" />
      </Link>
    </div>
  );
};

export default Icon;
