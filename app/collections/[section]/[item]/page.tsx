import { getDirectorySlugs, getFileSlugs } from "utils/get-data/get-slugs";
import SlugType from "utils/schema/slug.type";
import config from "data/config";
import ViewFactory from "components/collection/views";
import getProvider from "utils/get-data/get-provider";
import { ProviderType } from "utils/schema/provider.interface";

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

const getData = async (params: IParams) =>
  await getProvider(
    `${params.item}.md`,
    `${config.source.collections}/${params.section}`
  );

const Page = async ({ params }: { params: IParams }) => {
  const provider = await getData(params);
  return <ViewFactory provider={provider as ProviderType} />;
};

export default Page;
