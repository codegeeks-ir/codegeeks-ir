import { getFileSlugs, getItem } from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import PostAuthor from "components/PostAuthor";
import hljs from "highlight.js";
import Head from "next/head";
import { useEffect } from "react";
import { centerImage } from "lib/manipulate-html";

const Article = ({ data, author }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content={data.description} />
        <title>{`${data.title} | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه`}</title>
      </Head>
      <article dangerouslySetInnerHTML={{ __html: data.content }}></article>
      <PostAuthor name={author.name} githubID={author.githubID} />
    </>
  );
};

Article.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async ({ params }) => {
  const data = await getItem(`${params.slug}.md`, "docs/collections/blog");
  const author = await getItem(
    `${data.githubID}.md`,
    "docs/collections/companions"
  );
  return {
    props: {
      data,
      author,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getFileSlugs("docs/collections/blog");
  return { paths, fallback: false };
};

export default Article;
