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
      <meta
        property="og:title"
        content="منابع و مستندات درسی گروه کامپیوتر دانشگاه صنعتی ارومیه"
      />
      <meta property="og:type" content="website" />
      {/* <meta
        property="og:image"
        content="public/icones/codegeeks/codegeeks-icon.svg"
      /> */}
      <meta
        property="og:description"
        content="میتوانید با استفاده از مستندات درسی که در صفحه انجمن علمی کامپیوتر
        وجود دارد به دانش و مهارت خود در دروس تخصصی مهندسی کامپیوتر که در
        دانشگاه ارائه میشوند اضافه کنید"
      />
      <meta
        property="og:url"
        content="https://codegeeks.ir/requirements/courses"
      />
    </Head>
    <div className="collection-container">
      <PageHeader />
      <div className="page-header">
        <h1>مستندات درسی</h1>
        <p>
          میتوانید با استفاده از مستندات درسی که در صفحه انجمن علمی کامپیوتر
          وجود دارد به دانش و مهارت خود در دروس تخصصی مهندسی کامپیوتر که در
          دانشگاه ارائه میشوند اضافه کنید.منابع درسی کامپیوتر دانشگاه صنعتی
          ارومیه شامل پایگاه داده، ساختمان داده، شبکه، طراحی الگوریتم، کامپایلر،
          هوش مصنوعی، مهندسی نرم افزار، هوش محاسباتی، رایانش ابری و داده کاوی در
          این صفحه موجود هستند.
        </p>
        <LinkSection items={courseNavItems} />
      </div>
    </div>
  </>
);

CoursesPage.getLayout = (event) => <DefaultLayout>{event}</DefaultLayout>;

export default CoursesPage;
