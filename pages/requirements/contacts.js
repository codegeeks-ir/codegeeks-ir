import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import {
  getContentCollection,
  getItem,
  getPropCollection,
} from "lib/get-collection";
import TableFromArray from "components/TableFromArray";
import Head from "next/head";
import csvToArrayOfObjects from "lib/csv-to-array";

const Contacts = ({
  contactPropCollection,
  contactContentCollection,
  data,
}) => (
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
    {contactPropCollection.map((item, index) => (
      <TableFromArray
        array={contactContentCollection[index]}
        comments={item.comments}
        key={index}
      />
    ))}
  </>
);

Contacts.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async () => {
  const contactPropCollection = await getPropCollection("docs/data/contact");
  let contactContentCollection = await getContentCollection(
    "docs/data/contact"
  );
  contactContentCollection = contactContentCollection.map((item) =>
    csvToArrayOfObjects(item.content)
  );
  const data = await getItem("contacts.md", "docs/pages/requirements");
  return {
    props: {
      contactPropCollection,
      contactContentCollection,
      data,
    },
  };
};

export default Contacts;
