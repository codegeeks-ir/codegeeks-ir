import LinkSection from "components/LinkSection";
import LogoType from "components/LogoType";
import DefaultLayout from "layouts/DefaultLayout";
import Head from "next/head";

export default function RequirementsPage({}) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="نیازمندی‌ها, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="ارتباط با اساتید، چارت درسی گروه کامپیوتر، دروس رشته، ساعت حرکت سرویس ها و ..."
        />
        <title>نیازمندی‌ها | انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <div className="flex flex-col items-center w-full h-full max-h-screen mt-4">
        <LogoType />
        <div className="flex flex-col items-center justify-evenly w-full h-full grow-1 my-4">
          <div className="bg-emerald-600 w-full h-auto rounded-md my-2">
            <LinkSection category="requirements" />
          </div>
        </div>
      </div>
    </>
  );
}

RequirementsPage.getLayout = function getLayout(content) {
  return <DefaultLayout>{content}</DefaultLayout>;
};
