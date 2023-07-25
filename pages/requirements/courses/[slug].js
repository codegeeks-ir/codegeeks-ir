import FileExplorer from "components/FileExplorer";
import hljs from "highlight.js";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getDirectorySlugs, getItem } from "lib/get-collection";
import { centerImage } from "lib/manipulate-html";
import Head from "next/head";
import { useEffect } from "react";

const CoursePage = ({ data, repoName, resources }) => {
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
        <FileExplorer resources={resources} repoName={repoName} />
      </div>
    </>
  );
};

CoursePage.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async ({ params }) => {
  const data = await getItem("README.md", `courses/${params.slug}`);
  const repoName = params.slug;
  const resources = require(`../../../courses/${params.slug}/assets/tree.json`);
  return {
    props: {
      data,
      repoName,
      resources,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getDirectorySlugs("courses");
  return { paths, fallback: false };
};

export default CoursePage;
