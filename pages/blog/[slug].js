import { getSlugs, getItem } from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import PostAuthor from "components/PostAuthor";
import hljs from "highlight.js";
import Head from "next/head";
import { useEffect } from "react";
import { centerImage } from "lib/manipulate-html";

export default function PostPage({ data, author }) {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="انتشارات, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content={data.description}
        />
        <title>{`${data.title} | انجمن کامپیوتر صنعتی ارومیه`}</title>
      </Head>
      <article dangerouslySetInnerHTML={{ __html: data.content }}></article>
      <PostAuthor name={author.name} githubID={author.githubID} />
    </>
  );
}

PostPage.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getItem(`${params.slug}.md`, "collections/blog/posts");
  const author = await getItem(
    `${data.githubID}.md`,
    "collections/companions/bios"
  );
  return {
    props: {
      data,
      author,
    },
  };
}

export async function getStaticPaths() {
  const paths = getSlugs("collections/blog/posts");
  return { paths, fallback: false };
}
