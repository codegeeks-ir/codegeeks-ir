import { getItem } from "lib/get-collection";
import PageLayout from "layouts/PageLayout";
import DefaultLayout from "layouts/DefaultLayout";
import Developers from "components/Developers";
import Head from "next/head";
import { useEffect } from "react";
import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";

export default function Sponsor({
  sponsor,
  status,
  versionNumber,
  versionLink,
}) {
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
        <meta
          name="description"
          content="حمایت از پروژه وب سایت انجمن"
        />
        <title>حمایت | انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: sponsor.content }}></div>
      <Developers contributions={sponsor.contributions} />
      <div dangerouslySetInnerHTML={{ __html: status.content }}></div>
      <a className="btn-primary" href={versionLink}>
        نسخه {versionNumber}
      </a>
    </>
  );
}

Sponsor.getLayout = function getLayout(sponsor) {
  const pages = process.env.PAGES;
  return (
    <DefaultLayout>
      <PageLayout>{sponsor}</PageLayout>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const sponsor = await getItem("sponsor.md", "./");
  const status = await getItem("project-status.md", "./");
  const versionNumber = require("../package.json").version;
  const githubReleaseLink =
    "https://github.com/ceituut/ceituut.github.io/releases/tag/v";
  const versionLink = githubReleaseLink + versionNumber;
  return {
    props: {
      sponsor,
      status,
      versionNumber,
      versionLink,
    },
  };
}
