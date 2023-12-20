import Tabs from "components/Tabs";
import { getDataCollection } from "utils/get-data/get-collection";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import IPageData from "utils/schema/collections/page/page-data";
import ICsvData from "utils/schema/collections/csv/csv-data";
import { SlugType } from "utils/schema/collections/data-type";
import { getProvider } from "utils/schema/collections/view-type";
import TableFormArray from "components/TableFromArray";
import getFileData from "utils/get-data/get-data";

interface IParams {
  info: SlugType[];
}

export const generateStaticParams = async (): Promise<IParams[]> => {
  const sections = await getDirectorySlugs("docs/info");
  const pages = await Promise.all(
    sections.map(
      async (section) =>
        (await getFileData("README.md", `docs/info/${section}`)) as IPageData
    )
  );
  return pages.map((page: IPageData, index) =>
    page.mainRoute
      ? ({ info: [...page.mainRoute.split("/"), sections[index]] } as IParams)
      : { info: [sections[index]] }
  );
};

const getData = async (params: IParams) => {
  const section = params.info.at(-1);
  const collection = (await getDataCollection(
    `docs/info/${section}`,
    false
  )) as ICsvData[];
  const provider = await getProvider("README.md", `docs/info/${section}`);
  return { collection, provider };
};

const Page = async ({ params }: { params: IParams }) => {
  const { collection, provider } = await getData(params);
  return (
    <section>
      <h1>{(provider.data as IPageData).heading}</h1>
      <article dangerouslySetInnerHTML={{ __html: provider.content }}></article>
      <Tabs
        headers={collection.map((item) => item.title)}
        contents={collection.map((item, index) => (
          <TableFormArray
            array={item.list}
            description={item.description}
            key={index}
          />
        ))}
      />
    </section>
  );
};

export default Page;
