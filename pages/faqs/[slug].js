import { getSlugs, getPropCollection, getItem } from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import PostAuthor from "components/PostAuthor";
import { hljs } from "highlight.js";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

export default function FaqPage({ data }) {
  return (
    <article dangerouslySetInnerHTML={{ __html: data.contentHtml }}></article>
  );
}

FaqPage.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>;
    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getItem(params.slug, "collections/faqs/faqs");
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getSlugs("collections/faqs/faqs");
  return { paths, fallback: false };
}
