import { getPropCollection } from "lib/get-collection";
import blogProperties from "collection-properties/blogProperties";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import Authors from "components/Authors";

export default function Blog({
  propCollection,
  collectionType,
  properties,
  authors,
}) {
  return (
    <div className="collection-container">
      <PageHeader />
      <div className="page-header">
        <h1>انتشارات</h1>
      </div>
      <Collection
        propCollection={propCollection}
        collectionType={collectionType}
        properties={properties}
      />
      <Authors propCollection={authors} />
    </div>
  );
}

Blog.getLayout = function getLayout(content) {
  return <DefaultLayout>{content}</DefaultLayout>;
};

export async function getStaticProps() {
  const propCollection = await getPropCollection(
    "collections/blog/posts/",
    "blog"
  );
  const authors = await getPropCollection(
    "collections/authors/authors/",
    "authors"
  );
  const collectionType = blogProperties.collectionType;
  const properties = Object.values(blogProperties.properties);
  return {
    props: {
      collectionType,
      properties,
      propCollection,
      authors,
    },
  };
}
