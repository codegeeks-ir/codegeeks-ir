import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getPersianEducationYear } from "lib/persian-long-date";
import {
  getContentCollection,
  getItem,
  getPropCollection,
} from "lib/get-collection";
import Accordion from "components/Accordion";
import Head from "next/head";

const About = ({ propCollection, contentCollection, about }) => (
  <>
    <Head>
      <meta
        name="keywords"
        content="درباره‌ما, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
      />
      <meta
        name="description"
        content="درباره فعالیت های انجمن، آشنایی با اعضای مرکزی و اهداف"
      />
      <title>درباره‌ما | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
      <meta
        property="og:title"
        content="درباره انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://codegeeks.ir/icones/codegeeks/codegeeks-icon.svg"
      />
      <meta
        property="og:description"
        content="انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه به عنوان یک سازمان دانشجویی پویا
      و فعال، با هدف ایجاد ارتباط و تبادل دانش و تجربیات در حوزه فناوری و علوم
      کامپیوتر فعالیت می‌کند. با برگزاری رویدادها، مسابقات، پروژه‌ها و انتشارات،
      انجمن علمی کامپیوتر سعی دارد دانشجویان را در مسیر توسعه و یادگیری عمیق تر
      همراهی کند."
      />
      <meta property="og:url" content="https://codegeeks.ir/about" />
    </Head>
    <div dangerouslySetInnerHTML={{ __html: about.content }}></div>

    <h2>اعضای مرکزی انجمن</h2>
    {propCollection.map((item, index) => (
      <Accordion
        key={index}
        collapseData={contentCollection[index]}
        headerData={getPersianEducationYear(item.date)}
        isShowByDefault={item.membersID == propCollection[0].membersID}
      />
    ))}
  </>
);

About.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async () => {
  const propCollection = await getPropCollection(
    "collections/members/members",
    "members"
  );
  const contentCollection = await getContentCollection(
    "collections/members/members"
  );
  const about = await getItem("about-us.md", "./");
  return {
    props: {
      propCollection,
      contentCollection,
      about,
    },
  };
};

export default About;
