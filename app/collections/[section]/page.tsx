import Collection from "components/collection/Collection";
import { getDataCollection } from "utils/get-data/get-collection";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import SlugType from "utils/schema/slug.type";
import IPage from "utils/schema/data/page.interface";
import getProvider from "utils/get-data/get-provider";
import config from "data/config";
import { Metadata } from "next";

interface IParams {
  section: SlugType;
}

export const generateStaticParams = async (): Promise<IParams[]> => {
  return await getDirectorySlugs(config.source.collections).then((slugs) =>
    slugs.map((slug: SlugType) => ({ section: slug }))
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: IParams;
}): Promise<Metadata> => {
  const provider = await getProvider(
    "README.md",
    `${config.source.collections}/${params.section}`
  );
  const title = `${(provider.data as IPage).title} | ${config.title}`;
  const description = (provider.data as IPage).description;
  const url = `${config.url}/collections/${params.section}`
  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      url,
    }
  };
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
