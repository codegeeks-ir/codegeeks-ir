import { getPropCollection } from "lib/get-collection";
import challengesProperties from "collection-properties/challengesProperties";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import Head from "next/head";

const Challenges = ({ propCollection, collectionType, properties }) => (
  <>
    <Head>
      <meta
        name="keywords"
        content="مسابقات, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
      />
      <meta name="description" content="مسابقات برنامه نویسی انجمن" />
      <title>مسابقات | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
    </Head>
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
  </>
);

Challenges.getLayout = (content) => <DefaultLayout>{content}</DefaultLayout>;

export const getStaticProps = async () => {
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
};

export default Challenges;
