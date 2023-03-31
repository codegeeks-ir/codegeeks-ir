import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getPersianEducationYear } from "lib/persian-long-date";
import {
  getContentCollection,
  getItem,
  getPropCollection,
} from "lib/get-collection";
import Accordion from "components/Accordion";
import TableFromCsv from "components/TableFromCsv";
import Head from "next/head";

export default function RequirementsPage({
  contactPropCollection,
  contactContentCollection,
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
      {contactPropCollection.map((item, index) => (
        <TableFromCsv
          csvString={contactContentCollection[index].content}
          comments={item.comments}
          key={index}
        />
      ))}
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
  return {
    props: {
      contactPropCollection,
      contactContentCollection,
    },
  };
}
