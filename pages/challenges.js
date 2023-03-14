import { getPropCollection } from "lib/get-collection";
import challengesProperties from "collection-properties/challengesProperties";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import Authors from "components/Authors";

export default function Challenges({
  propCollection,
  collectionType,
  properties,
}) {
  return (
    <div className="collection-container">
      <PageHeader />
      <div className="page-header">
        <h1>مسابقات</h1>
      </div>
      <Collection
        propCollection={propCollection}
        collectionType={collectionType}
        properties={properties}
      />
    </div>
  );
}

Challenges.getLayout = function getLayout(content) {
  return <DefaultLayout>{content}</DefaultLayout>;
};

export async function getStaticProps() {
  const propCollection = await getPropCollection(
    "collections/challenges/challenges",
    "challenges"
  );
  const collectionType = challengesProperties.collectionType;
  const properties = Object.values(challengesProperties.properties);
  return {
    props: {
      collectionType,
      properties,
      propCollection,
    },
  };
}
