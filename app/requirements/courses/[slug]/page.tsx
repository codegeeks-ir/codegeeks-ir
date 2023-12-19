import FileExplorer from "components/file-explorer/FileExplorer";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import getTree from "utils/get-data/get-tree";
import { SlugType } from "utils/schema/collections/data-type";
import IPageData from "utils/schema/collections/page/page-data";
import { getProvider } from "utils/schema/collections/view-type";

interface IParams {
  slug: SlugType;
}

export const generateStaticParams = async (): Promise<IParams[]> =>
  (await getDirectorySlugs("courses")).map((slug) => ({ slug }));

const getData = async (params: IParams) => {
  const provider = await getProvider("README.md", `courses/${params.slug}`);
  const tree = await getTree(`courses/${params.slug}/resources`);
  return { provider, tree };
};

const Page = async ({ params }: { params: IParams }) => {
  const { provider, tree } = await getData(params);
  return (
    <section>
      <h1>{`مستندات درس ${(provider.data as IPageData).title}`}</h1>
      <article dangerouslySetInnerHTML={{ __html: provider.content }}></article>
      <FileExplorer tree={tree} repoName={"courses"} root={params.slug} />
    </section>
  );
};

export default Page;
