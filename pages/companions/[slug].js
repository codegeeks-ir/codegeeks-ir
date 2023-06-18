import Item from "components/collection/Item";
import hljs from "highlight.js";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getItem, getPropCollection, getSlugs } from "lib/get-collection";
import { centerImage } from "lib/manipulate-html";
import { getPersianLongDate } from "lib/persian-long-date";
import Head from "next/head";
import Image from "next/image";
import GithubIcon from "public/icones/social/github.svg";
import { useEffect } from "react";

const CompanionPage = ({ data, myPosts }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="همراهان انجمن, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta name="description" content="همراهان و فعالان انجمن" />
        <title>{`${data.name} | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه`}</title>
      </Head>
      <div className="flex flex-col items-center justify-center mb-0 rounded-none">
        <div className="profile-picture relative w-44 my-4">
          <Image
            src={`https://github.com/${data.githubID}.png`}
            width="176"
            height="176"
            alt={data.githubID}
          />
          <a
            className="github-icon relative"
            href={`https://github.com/${data.githubID}`}
          >
            <GithubIcon className="icon w-8" />
          </a>
        </div>
        <h2 className="card-title justify-center">{data.name}</h2>
        <p className="card-subtitle text-center mb-2">{data.position}</p>
      </div>
      <div
        className="non-important text-center rounded-t-none m-1 mt-0 p-1"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
      <ul
        className="flex flex-col flex-wrap items-center justify-center 
      w-full p-4 m-0 mt-5 bg-slate-300 rounded-md"
      >
        {myPosts.map((post) => (
          <Item
            title={post.title}
            subtitle={post.categories}
            footerRightData={getPersianLongDate(post.date)}
            footerLeftData={""}
            link={post.link}
            key={post.slug}
          />
        ))}
      </ul>
    </>
  );
};

CompanionPage.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async ({ params }) => {
  const data = await getItem(
    `${params.slug}.md`,
    "collections/companions/bios"
  );
  const allPosts = await getPropCollection("collections/blog/posts/", "blog");
  const myPosts = allPosts.filter((post) => post.githubID == data.githubID);
  return {
    props: {
      data,
      myPosts,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getSlugs("collections/companions/bios");
  return { paths, fallback: false };
};

export default CompanionPage;
