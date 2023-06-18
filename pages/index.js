import LogoType from "components/LogoType";
import LinkSection from "components/LinkSection";
import DefaultLayout from "layouts/DefaultLayout";
import mainNavItems from "utils/main-nav-items";
import sideNavItems from "utils/side-nav-items";

const Index = () => (
  <div className="flex flex-col items-center w-full h-full max-h-screen mt-4">
    <LogoType />
    <div className="flex flex-col items-center justify-evenly w-full h-full grow-1 my-4">
      <div className="bg-sky-600 w-full h-auto rounded-t-md">
        <LinkSection items={mainNavItems} />
      </div>
      <div className="bg-slate-700 w-full h-auto rounded-b-md">
        <LinkSection items={sideNavItems} />
      </div>
    </div>
  </div>
);

Index.getLayout = (index) => <DefaultLayout>{index}</DefaultLayout>;

export default Index;
