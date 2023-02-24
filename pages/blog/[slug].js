import { getSlugs, getPropCollection, getItem } from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import PostAuthor from "components/PostAuthor";
import hljs from "highlight.js";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

function centerImage() {
  const images = document.getElementsByTagName("img");
  if (images.length == 0 || images == null || images == undefined) return;
  // console.log(images);
  Object.values(images).foreach((image) => {
    let imageParent = image.parentElement;
    if (imageParent.tagName == "P") {
      imageParent.classNameList.add(
        "flex",
        "flex-row",
        "justify-center",
        "my-12"
      );
    }
  });
}

export default function PostPage({ data, author }) {
  useEffect(() => {
    hljs.highlightAll();
    // centerImage();
  }, []);
  return (
    <>
      <article dangerouslySetInnerHTML={{ __html: data.contentHtml }}></article>
      <PostAuthor name={author.name} githubID={author.githubID} />
    </>
  );
}

PostPage.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>;
    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getItem(params.slug, "collections/blog/posts");
  const author = await getItem(data.githubID, "collections/authors/authors");
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
