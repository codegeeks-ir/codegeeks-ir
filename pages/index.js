import Brand from "components/Brand";
import DefaultLayout from "layouts/DefaultLayout";
import Head from "next/head";

export default function Index({ content }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="انجمن کامپیوتر, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="انجمن علمی کامپیوتر و فناوری اطلاعات دانشگاه صنعتی ارومیه"
        />
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
        <title>انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <div className="flex flex-col flex-wrap items-center w-full">
        <Brand />
      </div>
    </>
  );
}

Index.getLayout = function getLayout(index) {
  return <DefaultLayout>{index}</DefaultLayout>;
};
