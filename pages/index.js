import LogoType from "components/LogoType";
import DefaultLayout from "layouts/DefaultLayout";

const Index = ({ content }) => {
  return (
    <div className="flex flex-col flex-wrap items-center w-full my-24">
      <LogoType />
    </div>
  );
};

Index.getLayout = function getLayout(index) {
  return <DefaultLayout>{index}</DefaultLayout>;
};

export default Index;
