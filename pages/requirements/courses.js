import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Head from "next/head";
import courseNavItems from "utils/course-nav-items";
import LinkSection from "components/LinkSection";
import { getItem } from "lib/get-collection";

const CoursesPage = ({ data }) => (
  <>
    <Head>
      <meta name="description" content={data.description} />
      <title>{data.title}</title>
      <meta property="og:title" content={data.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={data.image} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={data.url} />
    </Head>
    <div className="collection-container">
      <PageHeader />
      <div className="page-header">
        <h1>{data.heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        <LinkSection items={courseNavItems} />
      </div>
    </div>
  </>
);

CoursesPage.getLayout = (event) => <DefaultLayout>{event}</DefaultLayout>;

export const getStaticProps = async () => {
  const data = await getItem("courses.md", "docs/pages/requirements");
  return {
    props: {
      data,
    },
  };
};

export default CoursesPage;
