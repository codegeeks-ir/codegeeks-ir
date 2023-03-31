import Brand from "components/Brand";
import DefaultLayout from "layouts/DefaultLayout";
import Head from "next/head";

export default function Index({ content }) {
  return (
    <div className="flex flex-col flex-wrap items-center w-full">
      <Brand />
    </div>
  );
}

Index.getLayout = function getLayout(index) {
  return <DefaultLayout>{index}</DefaultLayout>;
};
