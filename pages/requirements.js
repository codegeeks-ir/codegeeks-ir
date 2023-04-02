import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getPersianEducationYear } from "lib/persian-long-date";
import {
  getContentCollection,
  getDirectorySlugs,
  getItem,
  getPropCollection,
} from "lib/get-collection";
import TableFromCsv from "components/TableFromCsv";
import Head from "next/head";
import Tabs from "components/Tabs";

export default function RequirementsPage({
  contactPropCollection,
  contactContentCollection,
  curriculumGuides,
}) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="نیازمندی‌ها, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="ارتباط با اساتید، چارت درسی گروه کامپیوتر، دروس رشته، ساعت حرکت سرویس ها و ..."
        />
        <title>نیازمندی‌ها | انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <h2>نیازمندی‌ها</h2>
      <Tabs
        headers={["ارتباط با دانشگاه", "چارت درسی"]}
        contents={[
          <div>
            {contactPropCollection.map((item, index) => (
              <TableFromCsv
                csvString={contactContentCollection[index].content}
                comments={item.comments}
                key={index}
              />
            ))}
          </div>,
          <div>
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
          </div>,
        ]}
      />
    </>
  );
}

RequirementsPage.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const contactPropCollection = await getPropCollection(
    "collections/requirements/data/contact"
  );
  const contactContentCollection = await getContentCollection(
    "collections/requirements/data/contact"
  );
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
      contactPropCollection,
      contactContentCollection,
      curriculumGuides,
    },
  };
}
