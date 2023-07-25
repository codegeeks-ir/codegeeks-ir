import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import {
  getContentCollection,
  getDirectorySlugs,
  getItem,
  getPropCollection,
} from "lib/get-collection";
import TableFromArray from "components/TableFromArray";
import Head from "next/head";
import csvToArrayOfObjects from "lib/csv-to-array";
import Tabs from "components/Tabs";

const CurriculumGuide = ({ curriculumGuides, data }) => (
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
    <h1>{data.heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
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
    "docs/data/curriculum-guide"
  );
  const curriculumGuides = await Promise.all(
    curriculumGuideDirectories.map(async (curriculumGuide) => {
      const props = await getPropCollection(
        `docs/data/curriculum-guide/${curriculumGuide.params.slug}`
      );
      let contents = await getContentCollection(
        `docs/data/curriculum-guide/${curriculumGuide.params.slug}`
      );
      contents = contents.map((item) => csvToArrayOfObjects(item.content));
      return {
        props: props.reverse(),
        contents: contents.reverse(),
      };
    })
  );
  const data = await getItem("curriculum-guide.md", "docs/pages/requirements");
  return {
    props: {
      curriculumGuides,
      data,
    },
  };
};

export default CurriculumGuide;
