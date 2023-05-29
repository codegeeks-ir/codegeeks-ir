import { useRouter } from "next/router";
import Link from "next/link";
import navbarItems from "utils/navbar-items";

const isActiveLink = (link) => {
  const router = useRouter();
  return router.pathname == link;
};

const Navbar = () => {
  return (
    <ul className="navbar">
      {navbarItems.map((item) => (
        <li
          className={`navbar-item ${isActiveLink(item.link) ? "active" : ""}`}
          key={item.link}
        >
          <Link href={item.link}>{item.icon}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
