import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getContentCollection, getPropCollection } from "lib/get-collection";
import TableFromCsv from "components/TableFromCsv";
import Head from "next/head";

const Contacts = ({ contactPropCollection, contactContentCollection }) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="دفترچه تماس, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="ارتباط با اساتید و کارکنان گروه کامپیوتر"
        />
        <title>دفترچه تماس | انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <h2>دفترچه تماس</h2>
      {contactPropCollection.map((item, index) => (
        <TableFromCsv
          csvString={contactContentCollection[index].content}
          comments={item.comments}
          key={index}
        />
      ))}
    </>
  );
};

Contacts.getLayout = function getLayout(content) {
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

export default Contacts;
