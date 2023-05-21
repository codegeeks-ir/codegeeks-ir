import Navbar from "components/Navbar";
import Footer from "components/Footer";

const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="container">{children}</main>
    <Footer />
  </>
);

export default DefaultLayout;
