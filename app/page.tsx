import LinkSection from "components/LinkSection";
import LogoType from "components/LogoType";
import homeNavItems from "data/navigation/home-navigation";

const Page = () => (
  <section className="main-page md:items-center">
    <LogoType />
    <section
      className="animate__animated 
      animate__fadeInUp  animate__faster animate__delay-1s"
    >
      <LinkSection items={homeNavItems} />
    </section>
  </section>
);

export default Page;
