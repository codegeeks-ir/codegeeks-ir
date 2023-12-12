import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import IPageData from "utils/schema/collections/page/page-data";
import { getDataCollection } from "utils/get-data/get-collection";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import { getItem } from "utils/schema/collections/view-type";
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
  const page = await getItem(
    "README.md",
    `docs/collections/${params.section}`
  );
  const data = await getDataCollection(`docs/collections/${params.section}`);
  for (const item of data) item.reference = await referenceFactory(item);
  return {
    page,
    data,
  };
};

const Page = async ({ params }: { params: IParams }) => {
  const { page, data } = await getData(params);
  return (
    <section className="collection-container">
      <PageHeader />
      <section className="page-header">
        <h1>{(page.data as IPageData).heading}</h1>
        <section dangerouslySetInnerHTML={{ __html: page.content as string }}></section>
      </section>
      <Collection data={data} />
    </section>
  );
};

export default Page;
