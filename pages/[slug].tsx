import { getItem, getPropCollection, getFileSlugs } from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import Head from "next/head";

const CollectionPage = ({ data, propCollection }) => (
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
      </div>
      <Collection
        propCollection={propCollection}
        collectionType={data.collectionType}
        properties={data.properties}
      />
    </div>
  </>
);

CollectionPage.getLayout = (content) => (
  <DefaultLayout>{content}</DefaultLayout>
);

export const getStaticProps = async ({ params }) => {
  const data = await getItem(`${params.slug}.md`, "docs/pages/collections");
  const propCollection = await getPropCollection(
    `docs/collections/${params.slug}`,
    params.slug
  );
  return {
    props: {
      data,
      propCollection,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getFileSlugs("docs/pages/collections");
  return { paths, fallback: false };
};

export default CollectionPage;
