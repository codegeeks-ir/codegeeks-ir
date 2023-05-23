import LogoType from "components/LogoType";
import Sections from "components/Sections";
import DefaultLayout from "layouts/DefaultLayout";

const Index = () => {
  return (
    <div className="flex flex-col items-center w-full h-full max-h-screen mt-4">
      <LogoType />
      <Sections />
    </div>
  );
};

Index.getLayout = function getLayout(index) {
  return <DefaultLayout>{index}</DefaultLayout>;
};

export default Index;
