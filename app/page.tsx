import LogoType from "components/LogoType";
import LinkSection from "components/LinkSection";
import mainNavItems from "utils/schema/navigation/main-navigation";
import sideNavItems from "utils/schema/navigation/side-navigation";

const Page = () => (
  <section className="mt-4 flex h-full max-h-screen w-full flex-col items-center">
    <LogoType />
    <section className="grow-1 my-4 flex h-full w-full flex-col items-center justify-evenly">
      <section className="h-auto w-full rounded-t-md bg-sky-600">
        <LinkSection items={mainNavItems} />
      </section>
      <section className="h-auto w-full rounded-b-md bg-slate-700">
        <LinkSection items={sideNavItems} />
      </section>
    </section>
  </section>
);

export default Page;
