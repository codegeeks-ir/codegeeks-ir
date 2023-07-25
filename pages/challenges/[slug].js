import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getItem, getFileSlugs } from "lib/get-collection";
import { getPersianLongDate } from "lib/persian-long-date";
import hljs from "highlight.js";
import { useEffect } from "react";
import Head from "next/head";
import { centerImage } from "lib/manipulate-html";

const ChallengePage = ({ data }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content="مسابقات برنامه نویسی انجمن" />
        <title>{`${data.title} | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه`}</title>
      </Head>
      <h1 className="mb-0">{data.title}</h1>
      <h5 className="card-subtitle mt-0 mb-2">{data.score}</h5>
      <div className="flex flex-row non-important mt-10 mb-20 p-0">
        <div className="w-1/2">
          <h5>زمان</h5>
          <p className="my-0">{getPersianLongDate(data.date)}</p>
          <p className="my-0">ساعت {data.date.split(" ")[1]}</p>
        </div>
      </div>
      <article dangerouslySetInnerHTML={{ __html: data.content }}></article>{" "}
    </>
  );
};

ChallengePage.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async ({ params }) => {
  const data = await getItem(
    `${params.slug}.md`,
    "docs/collections/challenges"
  );
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getFileSlugs("docs/collections/challenges");
  return { paths, fallback: false };
};

export default ChallengePage;
