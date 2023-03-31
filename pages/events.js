import { getPropCollection } from "lib/get-collection";
import eventsProperties from "collection-properties/eventsProperties";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import Head from "next/head";

export default function Events({ propCollection, collectionType, properties }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="رویدادها, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="رویدادها و کارگاه‌های فنی و علمی انجمن"
        />
        <title>رویداد‌ها | انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <div className="collection-container">
        <PageHeader />
        <div className="page-header">
          <h1>رویدادها</h1>
        </div>
        <Collection
          propCollection={propCollection}
          collectionType={collectionType}
          properties={properties}
        />
      </div>
    </>
  );
}

Events.getLayout = function getLayout(event) {
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
