import LogoType from "components/LogoType";
import LinkSection from "components/LinkSection";
import DefaultLayout from "layouts/DefaultLayout";
import mainNavItems from "utils/main-nav-items";
import sideNavItems from "utils/side-nav-items";

const Index = () => (
  <div className="mt-4 flex h-full max-h-screen w-full flex-col items-center">
    <LogoType />
    <div className="grow-1 my-4 flex h-full w-full flex-col items-center justify-evenly">
      <div className="h-auto w-full rounded-t-md bg-sky-600">
        <LinkSection items={mainNavItems} />
      </div>
      <div className="h-auto w-full rounded-b-md bg-slate-700">
        <LinkSection items={sideNavItems} />
      </div>
    </div>
  </div>
);

Index.getLayout = (index) => <DefaultLayout>{index}</DefaultLayout>;

export default Index;
