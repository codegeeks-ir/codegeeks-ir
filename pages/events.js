import { getPropCollection } from "lib/get-collection";
import eventsProperties from "collection-properties/eventsProperties";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import Head from "next/head";

const Events = ({ propCollection, collectionType, properties }) => (
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
      <title>رویداد‌ها | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
      <meta
        property="og:title"
        content="رویداد های انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه"
      />
      <meta property="og:type" content="website" />
      {/* <meta
        property="og:image"
        content="https://github.com/codegeeks-ir/codegeeks-ir/blob/main/public/images/background.png"
      /> */}
      <meta
        property="og:description"
        content="با ارائه رویدادهای متنوع و گسترده، انجمن علمی کامپیوتر دانشگاه صنعتی
        ارومیه به دانشجویان و علاقه‌مندان به علوم کامپیوتر فرصتی عالی برای
        گسترش دانش، برقراری ارتباطات مفید و بهبود مهارت‌های فنی و عملی ارائه
        می‌دهد."
      />
      <meta property="og:url" content="https://codegeeks.ir/events" />
    </Head>
    <div className="collection-container">
      <PageHeader />
      <div className="page-header">
        <h1>رویدادها</h1>
        <p>
          با ارائه رویدادهای متنوع و گسترده، انجمن علمی کامپیوتر دانشگاه صنعتی
          ارومیه به دانشجویان و علاقه‌مندان به علوم کامپیوتر فرصتی عالی برای
          گسترش دانش، برقراری ارتباطات مفید و بهبود مهارت‌های فنی و عملی ارائه
          می‌دهد.
        </p>
      </div>
      <Collection
        propCollection={propCollection}
        collectionType={collectionType}
        properties={properties}
      />
    </div>
  </>
);

Events.getLayout = (event) => <DefaultLayout>{event}</DefaultLayout>;

export const getStaticProps = async () => {
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
};

export default Events;
