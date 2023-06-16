import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getContentCollection, getPropCollection } from "lib/get-collection";
import TableFromArray from "components/TableFromArray";
import Head from "next/head";
import csvToArrayOfObjects from "lib/csv-to-array";

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
        <title>دفترچه تماس | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
      </Head>
      <h2>دفترچه تماس</h2>
      {contactPropCollection.map((item, index) => (
        <TableFromArray
          array={contactContentCollection[index]}
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
  let contactContentCollection = await getContentCollection(
    "collections/requirements/data/contact"
  );
  contactContentCollection = contactContentCollection.map((item) =>
    csvToArrayOfObjects(item.content)
  );
  return {
    props: {
      contactPropCollection,
      contactContentCollection,
    },
  };
}

export default Contacts;
