import LinkSection from "components/LinkSection";
import LogoType from "components/LogoType";
import Head from "next/head";
import requirementsNavItem from "utils/schema/navigation/requirements-navigation";

const Page = () => (
  <>
    <Head>
      <meta
        name="description"
        content="ارتباط با اساتید، چارت درسی گروه کامپیوتر، مستندات درسی رشته، ساعت حرکت سرویس ها و ..."
      />
      <title>نیازمندی‌ها | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
    </Head>
    <div className="mt-4 flex h-full max-h-screen w-full flex-col items-center">
      <LogoType />
      <div className="grow-1 my-4 flex h-full w-full flex-col items-center justify-evenly">
        <div className="h-auto w-full rounded-md bg-violet-600">
          <LinkSection items={requirementsNavItem} />
        </div>
      </div>
    </div>
  </>
);

export default Page;
