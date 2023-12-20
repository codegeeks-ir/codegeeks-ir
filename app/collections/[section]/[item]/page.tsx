import { getDirectorySlugs, getFileSlugs } from "utils/get-data/get-slugs";
import { SlugType } from "utils/schema/collections/data-type";
import { ProviderType } from "utils/schema/collections/view-type";
import { getProvider } from "utils/schema/collections/view-type";
import { ViewFactory } from "utils/schema/collections/view-type";

interface IParams {
  section: SlugType;
  item: SlugType;
}

export const generateStaticParams = async (): Promise<IParams[]> => {
  const collections = await getDirectorySlugs("docs/collections");
  const allItems: IParams[] = [];
  collections.map(
    async (section: SlugType) =>
      await getFileSlugs(`docs/collections/${section}`, false, "md").then(
        (items) =>
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
  await getProvider(`${params.item}.md`, `docs/collections/${params.section}`);

const Page = async ({ params }: { params: IParams }) => {
  const provider = await getData(params);
  return <ViewFactory provider={provider as ProviderType} />;
};

export default Page;
