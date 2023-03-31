import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import ListIcon from "public/icones/list.svg";
import CeituutIcon from "public/icones/ceituut/ceituut-icon.svg";

function isHomePage() {
  const router = useRouter();
  return router.pathname == "/";
}

function isActiveLink(path) {
  const router = useRouter();
  return router.pathname == path;
}

function DesktopNavbar({ links }) {
  return (
    <div className="hidden w-full sm:block max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex flex-row w-full items-center justify-start h-16">
        <div className="flex-1 flex w-full items-center justify-start">
          <ul className="flex flex-row w-full justify-start">
            {links.map((link) => (
              <li key={link.name} className="px-2 my-1">
                <Link
                  href={link.path}
                  className={`nav-link block ${
                    isActiveLink(link.path) ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileNavbar({ links }) {
  return (
    <div className="sm:hidden w-full">
      <ul className="flex flex-col items-start w-full px-2 pt-2 pb-3">
        {links.map((link) => (
          <li key={link.name} className="my-1 w-full">
            <Link
              href={link.path}
              className={`nav-link w-20 ${
                isActiveLink(link.path) ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar({ links }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="flex flex-row w-full justify-between">
        <Link
          href="/"
          className={`flex flex-row justify-center items-center mr-4 w-20 ${
            isHomePage() ? "invisible" : ""
          }`}
        >
          <CeituutIcon className="fill-gray-600 w-16 sm:w-20" />
        </Link>
        <button
          type="button"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="inline-flex sm:hidden items-center justify-center p-2"
        >
          <ListIcon className="fill-gray-600 w-8 h-auto" />
        </button>
        <DesktopNavbar links={links} />
      </div>
      {showMobileMenu ? <MobileNavbar links={links} /> : null}
    </nav>
  );
}
