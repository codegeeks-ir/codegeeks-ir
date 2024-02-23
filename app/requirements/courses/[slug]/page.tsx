import getProvider from "utils/get-data/get-provider";
import FileExplorer from "components/file-explorer/FileExplorer";
import SlugType from "utils/schema/slug.type";
import IPage from "utils/schema/data/page.interface";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import getTree from "utils/get-data/get-tree";
import config from "utils/config/config";

interface IParams {
  slug: SlugType;
}

export const generateStaticParams = async (): Promise<IParams[]> =>
  (await getDirectorySlugs(config.source.courses)).map((slug) => ({ slug }));

const getData = async (params: IParams) => {
  const provider = await getProvider("README.md", `${config.source.courses}/${params.slug}`);
  const tree = await getTree(`${config.source.courses}/${params.slug}/resources`);
  return { provider, tree };
};

const Page = async ({ params }: { params: IParams }) => {
  const { provider, tree } = await getData(params);
  return (
    <section>
      <h1>{`مستندات درس ${(provider.data as IPage).title}`}</h1>
      <article dangerouslySetInnerHTML={{ __html: provider.content }}></article>
      <FileExplorer tree={tree} repoName={"courses"} root={params.slug} />
    </section>
  );
};

export default Page;
