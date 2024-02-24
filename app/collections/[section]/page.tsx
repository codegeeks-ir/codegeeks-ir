import Collection from "components/collection/Collection";
import { getDataCollection } from "utils/get-data/get-collection";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import SlugType from "utils/schema/slug.type";
import IPage from "utils/schema/data/page.interface";
import getProvider from "utils/get-data/get-provider";
import config from "data/config";

interface IParams {
  section: SlugType;
}

export const generateStaticParams = async (): Promise<IParams[]> => {
  return await getDirectorySlugs(config.source.collections).then((slugs) =>
    slugs.map((slug: SlugType) => ({ section: slug }))
  );
};

const getData = async (params: IParams) => {
  const provider = await getProvider(
    "README.md",
    `${config.source.collections}/${params.section}`
  );
  const collection = await getDataCollection(
    `${config.source.collections}/${params.section}`
  );
  const format = collection[0].format;
  return {
    provider,
    collection,
    format,
  };
};

const Page = async ({ params }: { params: IParams }) => {
  const { provider, collection, format } = await getData(params);
  return (
    <section className="collection-container">
      <section className="page-header">
        <h1>{(provider.data as IPage).heading}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: provider.content as string }}
        ></article>
      </section>
      <Collection collection={collection} format={format} />
    </section>
  );
};

export default Page;
