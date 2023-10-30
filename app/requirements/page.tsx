import LinkSection from "components/LinkSection";
import LogoType from "components/LogoType";
import DefaultLayout from "layouts/DefaultLayout";
import Head from "next/head";
import requirementsNavItem from "utils/requirements-nav-items";

const RequirementsPage = () => (
  <>
    <Head>
      <meta
        name="description"
        content="ارتباط با اساتید، چارت درسی گروه کامپیوتر، مستندات درسی رشته، ساعت حرکت سرویس ها و ..."
      />
      <title>نیازمندی‌ها | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
    </Head>
    <div className="flex flex-col items-center w-full h-full max-h-screen mt-4">
      <LogoType />
      <div className="flex flex-col items-center justify-evenly w-full h-full grow-1 my-4">
        <div className="bg-violet-600 w-full h-auto rounded-md">
          <LinkSection items={requirementsNavItem} />
        </div>
      </div>
    </div>
  </>
);

RequirementsPage.getLayout = (content) => (
  <DefaultLayout>{content}</DefaultLayout>
);

export default RequirementsPage;
