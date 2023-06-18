import Link from "next/link";
import CodegeeksIcon from "public/icones/codegeeks/codegeeks-icon.svg";

const Icon = () => (
  <div className="logo">
    <Link href="/">
      <CodegeeksIcon className="fill-slate-200 w-16" />
    </Link>
  </div>
);

export default Icon;
