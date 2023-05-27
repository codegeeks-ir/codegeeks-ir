import { useRouter } from "next/router";
import Link from "next/link";
import navbarItems from "utils/navbar-items";

const isActiveLink = (path) => {
  const router = useRouter();
  return router.pathname == path;
};

const Navbar = () => {
  return (
    <ul className="navbar">
      {navbarItems
        .map((item) => (
          <li
            className={`navbar-item ${isActiveLink(item.path) ? "active" : ""}`}
          >
            <Link href={item.path}>{item.icon}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Navbar;
