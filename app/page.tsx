import LinkSection from "components/LinkSection";
import LogoType from "components/LogoType";
import homeNavItems from "utils/config/navigation/home-navigation";

const Page = () => (
  <section className="mt-4 flex h-full max-h-screen w-full flex-col items-center">
    <LogoType />
    <section
      className="grow-1 my-4 flex h-full w-full 
      flex-col items-center justify-evenly"
    >
      <section className="h-auto w-full">
        <LinkSection items={homeNavItems} />
      </section>
    </section>
  </section>
);

export default Page;
