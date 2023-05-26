import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import {
  getContentCollection,
  getDirectorySlugs,
  getPropCollection,
} from "lib/get-collection";
import TableFromCsv from "components/TableFromCsv";
import Head from "next/head";

const CurriculumGuide = ({ curriculumGuides }) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="چارت درسی, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta name="description" content="چارت درسی گروه کامپیوتر" />
        <title>چارت درسی | انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <h2>چارت درسی</h2>
      {curriculumGuides.map((curriculumGuide, curriculumGuideIndex) => (
        <div key={curriculumGuideIndex}>
          {curriculumGuide.props.map((item, index) => (
            <TableFromCsv
              csvString={curriculumGuide.contents[index].content}
              comments={item.comments}
              key={index}
            />
          ))}
        </div>
      ))}
    </>
  );
};

CurriculumGuide.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const curriculumGuideDirectories = await getDirectorySlugs(
    "collections/requirements/data/curriculum-guide"
  );
  const curriculumGuides = await Promise.all(
    curriculumGuideDirectories.map(async (curriculumGuide) => {
      const props = await getPropCollection(
        `collections/requirements/data/curriculum-guide/${curriculumGuide.params.slug}`
      );
      const contents = await getContentCollection(
        `collections/requirements/data/curriculum-guide/${curriculumGuide.params.slug}`
      );
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
}

export default CurriculumGuide;
