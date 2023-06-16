import { getPropCollection } from "lib/get-collection";
import faqsProperties from "collection-properties/faqsProperties";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import Head from "next/head";

export default function Faqs({ propCollection, collectionType, properties }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="سوالات‌متداول, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="سوالات‌متداول در رابطه با فعالیت‌های انجمن"
        />
        <title>سوالات‌متداول | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
      </Head>
      <div className="collection-container">
        <PageHeader />
        <div className="page-header">
          <h1>سوالات‌متداول</h1>
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

Faqs.getLayout = function getLayout(content) {
  return <DefaultLayout>{content}</DefaultLayout>;
};

export async function getStaticProps() {
  const propCollection = await getPropCollection(
    "collections/faqs/faqs/",
    "faqs"
  );
  const collectionType = faqsProperties.collectionType;
  const properties = Object.values(faqsProperties.properties);
  return {
    props: {
      collectionType,
      properties,
      propCollection,
    },
  };
}
