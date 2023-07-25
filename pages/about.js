import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getPersianEducationYear } from "lib/persian-long-date";
import {
  getContentCollection,
  getItem,
  getPropCollection,
} from "lib/get-collection";
import Accordion from "components/Accordion";
import Head from "next/head";

const About = ({ propCollection, contentCollection, data }) => (
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
    <h1>{data.heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
    <h2>اعضای مرکزی انجمن</h2>
    {propCollection.map((item, index) => (
      <Accordion
        key={index}
        collapseData={contentCollection[index]}
        headerData={getPersianEducationYear(item.date)}
        isShowByDefault={item.membersID == propCollection[0].membersID}
      />
    ))}
  </>
);

About.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async () => {
  const propCollection = await getPropCollection(
    "docs/collections/members",
    "members"
  );
  const contentCollection = await getContentCollection(
    "docs/collections/members"
  );
  const data = await getItem("about.md", "docs/pages");
  return {
    props: {
      propCollection,
      contentCollection,
      data,
    },
  };
};

export default About;
