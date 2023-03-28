import { getPropCollection } from "lib/get-collection";
import faqsProperties from "collection-properties/faqsProperties";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";

export default function Faqs({ propCollection, collectionType, properties }) {
  return (
    <div className="collection-container">
      <PageHeader />
      <div className="page-header">
        <h1>سوالات متداول</h1>
      </div>
      <Collection
        propCollection={propCollection}
        collectionType={collectionType}
        properties={properties}
      />
    </div>
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
