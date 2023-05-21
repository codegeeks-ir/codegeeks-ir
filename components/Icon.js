import Link from "next/link";
import { useRouter } from "next/router";
import CeituutIcon from "public/icones/ceituut/ceituut-icon.svg";

const isHomePage = () => {
  const router = useRouter();
  return router.pathname == "/";
};

const Icon = () => {
  return (
    <Link href="/" className={`logo ${isHomePage() ? "invisible" : ""}`}>
      <CeituutIcon className="fill-gray-400 w-16" />
    </Link>
  );
};

export default Icon;
