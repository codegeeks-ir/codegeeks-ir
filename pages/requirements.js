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

export default function RequirementsPage({
  contactPropCollection,
  contactContentCollection,
}) {
  return (
    <>
      <h2>نیازمندی ها</h2>
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
    "collections/data/data/contact"
  );
  const contactContentCollection = await getContentCollection(
    "collections/data/data/contact"
  );
  return {
    props: {
      contactPropCollection,
      contactContentCollection,
    },
  };
}
