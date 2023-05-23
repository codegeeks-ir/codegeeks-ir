import { useRouter } from "next/router";
import Link from "next/link";
import HomeIcon from "public/icones/home.svg";
import RequirementsIcon from "public/icones/requirements.svg";
import ProfileIcon from "public/icones/profile.svg";

const isActiveLink = (path) => {
  const router = useRouter();
  return router.pathname == path;
};

const Navbar = () => {
  return (
    <ul className="navbar">
      <li
        className={`navbar-item ${
          isActiveLink("/requirements") ? "active" : ""
        }`}
      >
        <Link href="/requirements">
          <RequirementsIcon className="w-8 h-auto" />
        </Link>
      </li>
      <li className={`navbar-item ${isActiveLink("/") ? "active" : ""}`}>
        <Link href="/">
          <HomeIcon className="w-8 h-auto" />
        </Link>
      </li>
      <li className={`navbar-item ${isActiveLink("/account") ? "active" : ""}`}>
        <Link href="/account">
          <ProfileIcon className="w-8 h-auto" />
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
