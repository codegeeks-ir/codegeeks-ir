import { getItem } from "lib/get-collection";
import PageLayout from "layouts/PageLayout";
import DefaultLayout from "layouts/DefaultLayout";
import Developers from "components/Developers";
import Head from "next/head";
import { useEffect } from "react";
import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";

const Sponsor = ({ data, status, version, versionLink }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content={data.description} />
        <title>{data.title}</title>
        <meta property="og:title" content={data.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={data.image} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={data.url} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      <Developers contributions={data.contributions} />
      <div dangerouslySetInnerHTML={{ __html: status.content }}></div>
      <a className="btn-primary" href={versionLink}>
        نسخه {version}
      </a>
    </>
  );
};

Sponsor.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async () => {
  const data = await getItem("sponsor.md", "docs/pages/");
  const status = await getItem("project-status.md", "docs/pages/");
  const version = require("../package.json").version;
  const githubReleaseLink =
    "https://github.com/codegeeks-ir/codegeeks-ir/releases/tag/v";
  const versionLink = githubReleaseLink + version;
  return {
    props: {
      data,
      status,
      version,
      versionLink,
    },
  };
};

export default Sponsor;
