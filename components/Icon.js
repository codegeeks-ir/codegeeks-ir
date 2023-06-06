import Link from "next/link";
import { useRouter } from "next/router";
import CodegeeksIcon from "public/icones/codegeeks/codegeeks-icon.svg";

const isHomePage = () => useRouter().pathname == "/";

const Icon = () => (
  <div className={`logo ${isHomePage() ? "invisible" : ""}`}>
    <Link href="/">
      <CodegeeksIcon className="fill-slate-200 w-16" />
    </Link>
  </div>
);

export default Icon;
