import { getDirectorySlugs, getFileSlugs } from "utils/get-data/get-slugs";
import SlugType from "utils/schema/slug.type";
import config from "data/config";
import ViewFactory from "components/collection/views";
import getProvider from "utils/get-data/get-provider";
import { ProviderType } from "utils/schema/provider.interface";
import { Metadata } from "next";
import IPage from "utils/schema/data/page.interface";
import { DataType, Format } from "utils/schema/data";
import ICompanion from "utils/schema/data/companion.interface";
import ICsv from "utils/schema/data/csv.interface";

interface IParams {
  section: SlugType;
  item: SlugType;
}

export const generateStaticParams = async (): Promise<IParams[]> => {
  const collections = await getDirectorySlugs(config.source.collections);
  const allItems: IParams[] = [];
  collections.map(
    async (section: SlugType) =>
      await getFileSlugs(
        `${config.source.collections}/${section}`,
        false,
        "md"
      ).then((items) =>
        items.map((item: SlugType) =>
          allItems.push({
            section,
            item,
          })
        )
      )
  );
  return allItems;
};

export const generateMetadata = async ({
  params,
}: {
  params: IParams;
}): Promise<Metadata> => {
  const data = (await getData(params)).data as Exclude<DataType, ICsv>;
  const title =
    data.format == Format.Companions
      ? `${data.name} | ${config.title}`
      : `${data.title} | ${config.title}`;
  const description = data.excerpt;
  const url = `${config.url}/collections/${params.section}/${params.item}`;
  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      url,
    },
  };
};

const getData = async (params: IParams) =>
  await getProvider(
    `${params.item}.md`,
    `${config.source.collections}/${params.section}`
  );

const Page = async ({ params }: { params: IParams }) => {
  const provider = await getData(params);
  return (
    <section className="page">
      <ViewFactory provider={provider as ProviderType} />
    </section>
  );
};

export default Page;
