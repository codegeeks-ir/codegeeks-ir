import FileExplorer from "components/FileExplorer";
import hljs from "highlight.js";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getDirectorySlugs, getItem } from "lib/get-collection";
import { centerImage } from "lib/manipulate-html";
import Head from "next/head";
import { useEffect } from "react";

export default function CoursePage({ data, repoName, resources }) {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="دروس, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta name="description" content="منابع درسی گروه کامپیوتر" />
        <title>{`${data.title} | انجمن کامپیوتر صنعتی ارومیه`}</title>
      </Head>
      <div>
        <article dangerouslySetInnerHTML={{ __html: data.content }}></article>
        <FileExplorer resources={resources} repoName={repoName} />
      </div>
    </>
  );
}

CoursePage.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getItem("README.md", `collections/courses/${params.slug}`);
  const repoName = params.slug;
  const resources = require(`../../../collections/courses/${params.slug}/assets/tree.json`);
  return {
    props: {
      data,
      repoName,
      resources,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getDirectorySlugs("collections/courses");
  return { paths, fallback: false };
}
