import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Head from "next/head";
import courseNavItems from "utils/course-nav-items";
import LinkSection from "components/LinkSection";

const CoursesPage = () => (
  <>
    <Head>
      <meta
        name="keywords"
        content="مستندات درسی, جزوه, اسلاید, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
      />
      <meta name="description" content="منابع و مستندات درسی گروه کامپیوتر" />
      <title>
        منابع و مستندات درسی | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه
      </title>
    </Head>
    <div className="collection-container">
      <PageHeader />
      <div className="page-header">
        <h1>مستندات درسی</h1>
        <LinkSection items={courseNavItems} />
      </div>
    </div>
  </>
);

CoursesPage.getLayout = (event) => <DefaultLayout>{event}</DefaultLayout>;

export default CoursesPage;
