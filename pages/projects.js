import { getContentCollection, getPropCollection } from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import Head from "next/head";
import PageLayout from "layouts/PageLayout";
import TableFromArray from "components/TableFromArray";
import csvToArrayOfObjects from "lib/csv-to-array";

const Projects = ({ projectPropCollection, projectContentCollection }) => (
  <>
    <Head>
      <meta
        name="keywords"
        content="پروژه‌ها, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
      />
      <meta
        name="description"
        content="پروژه‌های پایانی دانشجویان دانشگاه صنعتی ارومیه و پروژه‌های تیمی انجمن"
      />
      <title>پروژه‌ها | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
      <meta
        property="og:title"
        content="پروژه های انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://codegeeks.ir/icones/codegeeks/codegeeks-icon.svg"
      />
      <meta
        property="og:description"
        content="در صفحه پروژه‌های پایانی دوره کارشناسی دانشجویان دانشگاه صنعتی ارومیه، شما
        با نمونه‌های برجسته از پروژه‌هایی که توسط دانشجویان در زمینه‌های مختلف
        علوم کامپیوتر انجام شده است، آشنا خواهید شد."
      />
      <meta property="og:url" content="https://codegeeks.ir/projects" />
    </Head>
    <h1>پروژه‌ها</h1>
    <p>
      در صفحه پروژه‌های پایانی دوره کارشناسی دانشجویان دانشگاه صنعتی ارومیه، شما
      با نمونه‌های برجسته از پروژه‌هایی که توسط دانشجویان در زمینه‌های مختلف
      علوم کامپیوتر انجام شده است، آشنا خواهید شد. این پروژه‌ها نشان دهنده
      توانایی‌های تخصصی، خلاقیت و مهارت‌های فنی دانشجویان در حل مسائل و ارائه
      راهکارهای نوین در زمینه کامپیوتر است. لطفاً صفحه پروژه‌های پایانی دوره
      کارشناسی دانشجویان دانشگاه صنعتی ارومیه را دنبال کنید تا از آخرین
      پروژه‌ها، نتایج و دستاوردهای دانشجویان ما باخبر شوید. همچنین، این صفحه به
      شما فرصتی عالی برای برقراری ارتباط با دانشجویان و اساتید حوزه کامپیوتر
      دانشگاه صنعتی ارومیه را ارائه می‌دهد.
    </p>
    <div>
      {projectPropCollection.map((item, index) => (
        <TableFromArray
          array={projectContentCollection[index]}
          comments={item.comments}
          key={index}
        />
      ))}
    </div>
  </>
);

Projects.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async () => {
  const projectPropCollection = await getPropCollection(
    "collections/projects/projects/"
  );
  let projectContentCollection = await getContentCollection(
    "collections/projects/projects/"
  );
  projectContentCollection = projectContentCollection.map((item) =>
    csvToArrayOfObjects(item.content)
  );
  return {
    props: {
      projectPropCollection,
      projectContentCollection,
    },
  };
};

export default Projects;
