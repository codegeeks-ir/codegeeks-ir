import { getPropCollection } from "lib/get-collection";
import eventsProperties from "collection-properties/eventsProperties";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Head from "next/head";
import courseNavItems from "utils/course-nav-items";
import LinkSection from "components/LinkSection";

export default function Courses({ propCollection, collectionType, properties }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="مستندات درسی, جزوه, اسلاید, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="منابع و مستندات درسی گروه کامپیوتر"
        />
        <title>منابع و مستندات درسی | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
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
}

Courses.getLayout = function getLayout(event) {
  return <DefaultLayout>{event}</DefaultLayout>;
};

export async function getStaticProps() {
  const propCollection = await getPropCollection(
    "collections/events/events/",
    "events"
  );
  const collectionType = eventsProperties.collectionType;
  const properties = Object.values(eventsProperties.properties);
  return {
    props: {
      collectionType,
      properties,
      propCollection,
    },
  };
}
