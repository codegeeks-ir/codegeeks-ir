import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function DefaultLayout({ children }) {
  const mainMenu = process.env.PAGES.filter((page) => page.type == "main");
  const footerMenu = process.env.PAGES.filter((page) => page.type == "footer");
  const socialMenu = process.env.SOCIAL;
  return (
    <>
      <Navbar links={mainMenu} />
      <main className="container">{children}</main>
      <Footer footerMenu={footerMenu} socialMenu={socialMenu} />
    </>
  );
}
