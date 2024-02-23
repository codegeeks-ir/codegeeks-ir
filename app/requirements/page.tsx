import LinkSection from "components/LinkSection";
import Head from "next/head";
import requirementsNavItem from "utils/config/navigation/requirements-navigation";
import sideNavItems from "utils/config/navigation/side-navigation";

const Page = () => (
  <>
    <Head>
      <meta
        name="description"
        content="ارتباط با اساتید، چارت درسی گروه کامپیوتر، مستندات درسی رشته، ساعت حرکت سرویس ها و ..."
      />
      <title>نیازمندی‌ها | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
    </Head>
    <section className="mt-4 flex h-full max-h-screen w-full flex-col items-center">
      <section className="grow-1 my-4 flex h-full w-full flex-col items-center justify-evenly">
        <section className="h-auto w-full">
          <LinkSection items={requirementsNavItem} />
          <LinkSection items={sideNavItems} />
        </section>
      </section>
    </section>
  </>
);

export default Page;
