import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import {
  getContentCollection,
  getDirectorySlugs,
  getPropCollection,
} from "lib/get-collection";
import TableFromArray from "components/TableFromArray";
import Head from "next/head";
import csvToArrayOfObjects from "lib/csv-to-array";
import Tabs from "components/Tabs";

const CurriculumGuide = ({ curriculumGuides }) => (
  <>
    <Head>
      <meta
        name="keywords"
        content="چارت, چارت درسی‌‌‌‌, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
      />
      <meta name="description" content="چارت درسی گروه کامپیوتر" />
      <title>چارت درسی | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
    </Head>
    <h2>چارت</h2>
    <p>
      با دنبال کردن این چارت انتخاب واحد دانشگاه صنعتی ارومیه ،دانشجویان
      می‌توانند به تدریج مهارت‌ها و دانش مورد نیاز برای تحقق موفقیت در حوزه
      کامپیوتر را کسب کنند. همچنین، این چارت به دانشجویان این امکان را می‌دهد تا
      با موضوعات مختلف در زمینه کامپیوتر آشنا شوند و علاقه‌مندی‌های خود را در
      این حوزه پیدا کنند.
    </p>
    {curriculumGuides.map((curriculumGuide, curriculumGuideIndex) => (
      <div key={curriculumGuideIndex}>
        <TableFromArray
          array={curriculumGuide.contents[0]}
          comments={curriculumGuide.props[0].comments}
        />
        <Tabs
          headers={curriculumGuide.props
            .slice(1)
            .map((prop) => prop.comments[0])}
          contents={curriculumGuide.contents
            .slice(1)
            .map((semester, semesterIndex) => (
              <TableFromArray
                array={semester}
                comments={
                  curriculumGuide.props.slice(1)[semesterIndex].comments
                }
                key={semesterIndex}
              />
            ))}
        />
      </div>
    ))}
  </>
);

CurriculumGuide.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async () => {
  const curriculumGuideDirectories = await getDirectorySlugs(
    "collections/requirements/data/curriculum-guide"
  );
  const curriculumGuides = await Promise.all(
    curriculumGuideDirectories.map(async (curriculumGuide) => {
      const props = await getPropCollection(
        `collections/requirements/data/curriculum-guide/${curriculumGuide.params.slug}`
      );
      let contents = await getContentCollection(
        `collections/requirements/data/curriculum-guide/${curriculumGuide.params.slug}`
      );
      contents = contents.map((item) => csvToArrayOfObjects(item.content));
      return {
        props: props.reverse(),
        contents: contents.reverse(),
      };
    })
  );
  return {
    props: {
      curriculumGuides,
    },
  };
};

export default CurriculumGuide;
