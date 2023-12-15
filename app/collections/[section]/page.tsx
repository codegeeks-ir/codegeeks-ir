import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import IPageData from "utils/schema/collections/page/page-data";
import { getDataCollection } from "utils/get-data/get-collection";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import { getProvider } from "utils/schema/collections/view-type";
import { referenceFactory } from "utils/schema/collections/reference-type";
import { SlugType } from "utils/schema/collections/data-type";

interface IParams {
  section: SlugType;
}

export const generateStaticParams = async (): Promise<IParams[]> => {
  return await getDirectorySlugs("docs/collections").then((slugs) =>
    slugs.map((slug: SlugType) => ({ section: slug }))
  );
};

const getData = async (params: IParams) => {
  const provider = await getProvider(
    "README.md",
    `docs/collections/${params.section}`
  );
  const collection = await getDataCollection(
    `docs/collections/${params.section}`
  );
  for (const item of collection) item.reference = await referenceFactory(item);
  return {
    provider,
    collection,
  };
};

const Page = async ({ params }: { params: IParams }) => {
  const { provider, collection } = await getData(params);
  return (
    <section className="collection-container">
      <PageHeader />
      <section className="page-header">
        <h1>{(provider.data as IPageData).heading}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: provider.content as string }}
        ></article>
      </section>
      <Collection collection={collection} />
    </section>
  );
};

export default Page;
