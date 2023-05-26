import LogoType from "components/LogoType";
import LinkSection from "components/LinkSection";
import DefaultLayout from "layouts/DefaultLayout";

const Index = () => {
  return (
    <div className="flex flex-col items-center w-full h-full max-h-screen mt-4">
      <LogoType />
      <div className="flex flex-col items-center justify-evenly w-full h-full grow-1 my-4">
        <div className="bg-indigo-500 w-full h-auto rounded-md my-2">
          <LinkSection category="main" />
        </div>
        <div className="bg-violet-500 w-full h-auto rounded-md my-2">
          <LinkSection category="side" />
        </div>
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(index) {
  return <DefaultLayout>{index}</DefaultLayout>;
};

export default Index;
