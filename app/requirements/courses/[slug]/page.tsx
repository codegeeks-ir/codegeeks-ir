import FileExplorer, { IElement, IReport } from "components/FileExplorer";
import hljs from "highlight.js";
import { getDirectorySlugs, getItem } from "lib/get-collection";
import { centerImage } from "lib/manipulate-html";
import Head from "next/head";
import { useEffect } from "react";

const CoursePage = ({ data, repoName, rootDirectory, root, report }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content="منابع و مستندات درسی گروه کامپیوتر" />
        <title>{`مستندات درس ${data.title} | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه`}</title>
      </Head>
      <div>
        <article dangerouslySetInnerHTML={{ __html: data.content }}></article>
        <FileExplorer root={root} report={report} repoName={repoName} rootDirectory={rootDirectory} />
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getItem("README.md", `courses/${params.slug}`);
  const repoName = "courses";
  const rootDirectory = params.slug;
  const tree = require(`../../../courses/${params.slug}/assets/tree.json`);
  const root: IElement = tree[0];
  const report: IReport = tree[1];
  return {
    props: {
      data,
      repoName,
      rootDirectory,
      root,
      report
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getDirectorySlugs("courses");
  return { paths, fallback: false };
};

export default CoursePage;
