import Tabs from "components/Tabs";
import { getDataCollection } from "utils/get-data/get-collection";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import IPage from "utils/schema/data/page.interface";
import ICsv from "utils/schema/data/csv.interface";
import SlugType from "utils/schema/slug.type";
import getProvider from "utils/get-data/get-provider";
import getFileData from "utils/get-data/get-data";
import config from "data/config";
import ElementFactory from "components/collection/elements";
import { Metadata } from "next";

interface IParams {
  info: SlugType[];
}

export const generateStaticParams = async (): Promise<IParams[]> => {
  const sections = await getDirectorySlugs(config.source.info);
  const pages = await Promise.all(
    sections.map(
      async (section) =>
        (await getFileData(
          "README.md",
          `${config.source.info}/${section}`
        )) as IPage
    )
  );
  return pages.map((page: IPage, index) =>
    page.mainRoute
      ? ({ info: [...page.mainRoute.split("/"), sections[index]] } as IParams)
      : { info: [sections[index]] }
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: IParams;
}): Promise<Metadata> => {
  const section = params.info.at(-1);
  const provider = await getProvider(
    "README.md",
    `${config.source.info}/${section}`
  );
  const title = `${(provider.data as IPage).title} | ${config.title}`;
  const description = (provider.data as IPage).description;
  const url = `${config.url}/${params.info.join("/")}`
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
  const section = params.info.at(-1);
  const collection = (await getDataCollection(
    `${config.source.info}/${section}`,
    false
  )) as ICsv[];
  const provider = await getProvider(
    "README.md",
    `${config.source.info}/${section}`
  );
  return { collection, provider };
};

const Page = async ({ params }: { params: IParams }) => {
  const { collection, provider } = await getData(params);
  return (
    <section className="page">
      <h1>{(provider.data as IPage).heading}</h1>
      <article dangerouslySetInnerHTML={{ __html: provider.content }}></article>
      <Tabs
        headers={collection.map((item) => item.title)}
        contents={collection.map((item) => (
          <ElementFactory data={item} key={item.slug} />
        ))}
      />
    </section>
  );
};

export default Page;
