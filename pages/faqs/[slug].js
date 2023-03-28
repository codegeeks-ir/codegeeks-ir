import { getSlugs, getItem } from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";

export default function FaqPage({ data }) {
  return (
    <article dangerouslySetInnerHTML={{ __html: data.content }}></article>
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
  const data = await getItem(`${params.slug}.md`, "collections/faqs/faqs");
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
