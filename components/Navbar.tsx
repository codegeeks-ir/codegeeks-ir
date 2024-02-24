"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import navbarItems from "data/navigation/navbar-navigation";

const isActiveLink = (link: string) => usePathname() == link;

const Navbar = () => (
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

export default Navbar;
