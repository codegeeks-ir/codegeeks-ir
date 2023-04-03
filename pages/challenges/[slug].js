import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getItem, getSlugs } from "lib/get-collection";
import { getPersianDate } from "lib/persian-long-date";
import hljs from "highlight.js";
import { useEffect } from "react";
import Head from "next/head";
import { centerImage } from "lib/manipulate-html";

export default function ChallengePage({ data }) {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="مسابقات, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta name="description" content="مسابقات برنامه نویسی انجمن" />
        <title>{`${data.title} | انجمن کامپیوتر صنعتی ارومیه`}</title>
      </Head>
      <h1 className="mb-0">{data.title}</h1>
      <h5 className="card-subtitle mt-0 mb-2">{data.score}</h5>
      <div className="flex flex-row non-important mt-10 mb-20 p-0">
        <div className="w-1/2">
          <h5>زمان</h5>
          <p className="card-text my-0">{getPersianDate(data.date)}</p>
          <p className="card-text my-0">ساعت {data.date.split(" ")[1]}</p>
        </div>
      </div>
      <article dangerouslySetInnerHTML={{ __html: data.content }}></article>{" "}
    </>
  );
}

ChallengePage.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>;
    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getItem(
    `${params.slug}.md`,
    "collections/challenges/challenges"
  );
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getSlugs("collections/challenges/challenges");
  return { paths, fallback: false };
}
