import { getItem } from "lib/get-collection";
import PageLayout from "layouts/PageLayout";
import DefaultLayout from "layouts/DefaultLayout";
import Developers from "components/Developers";
import Head from "next/head";
import { useEffect } from "react";
import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";

const Sponsor = ({ sponsor, status, version, versionLink }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="حمایت, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta name="description" content="حمایت از پروژه وب سایت انجمن" />
        <title>حمایت | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: sponsor.content }}></div>
      <Developers contributions={sponsor.contributions} />
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
  const sponsor = await getItem("sponsor.md", "./");
  const status = await getItem("project-status.md", "./");
  const version = require("../package.json").version;
  const githubReleaseLink =
    "https://github.com/codegeeks-ir/codegeeks-ir/releases/tag/v";
  const versionLink = githubReleaseLink + version;
  return {
    props: {
      sponsor,
      status,
      version,
      versionLink,
    },
  };
};

export default Sponsor;
