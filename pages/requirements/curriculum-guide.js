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

const CurriculumGuide = ({ curriculumGuides }) => {
  let { props, contents } = curriculumGuides[0]
  delete contents["0"]
 Object.keys(contents).map((item,index) => {
    contents[index]=contents[item]
  })
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="چارت, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta name="description" content="چارت درسی گروه کامپیوتر" />
        <title>چارت درسی | انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <h2>چارت</h2>
      {props[0].comments}
      <Tabs
        headers={props.slice(1).map(tab => { return tab.comments })}
        contents={props.slice(1).map((item, index) => (
          <TableFromArray
            array={contents[index]}
            comments={item.comments}
            key={index}
          />
        ))}
      />
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
}

export default CurriculumGuide;
