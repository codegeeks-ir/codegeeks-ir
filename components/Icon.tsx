import Link from "next/link";
import CodegeeksIcon from "public/icones/codegeeks/codegeeks-icon.svg";

const Icon = () => (
  <div className="logo">
    <Link href="/">
      <CodegeeksIcon className="w-16 fill-slate-500" />
    </Link>
  </div>
);

export default Icon;
