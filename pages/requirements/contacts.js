import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getContentCollection, getPropCollection } from "lib/get-collection";
import TableFromArray from "components/TableFromArray";
import Head from "next/head";
import csvToArrayOfObjects from "lib/csv-to-array";

const Contacts = ({ contactPropCollection, contactContentCollection }) => (
  <>
    <Head>
      <meta
        name="keywords"
        content="دفترچه تماس, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
      />
      <meta
        name="description"
        content="ارتباط با اساتید و کارکنان گروه کامپیوتر دانشگاه صنعتی ارومیه"
      />
      <title>دفترچه تماس | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
      <meta
        property="og:title"
        content="ارتباط با اساتید و کارکنان گروه کامپیوتر دانشگاه صنعتی ارومیه"
      />
      <meta property="og:type" content="website" />
      {/* <meta
        property="og:image"
        content="public/icones/codegeeks/codegeeks-icon.svg"
      /> */}
      <meta
        property="og:description"
        content="شما می‌توانید با تماس با اساتید دانشگاه صنعتی ارومیه و ارسال ایمیل به
        آدرس‌های فوق، از تجربیات آن‌ها بهره‌مند شوید، سوالات خود را مطرح کنید و در
        مورد موضوعات مختلف در رشته مهندسی کامپیوتر مشورت بگیرید."
      />
      <meta
        property="og:url"
        content="https://codegeeks.ir/requirements/contacts"
      />
    </Head>
    <h2>دفترچه تماس</h2>
    <p>
      شما می‌توانید با تماس با اساتید دانشگاه صنعتی ارومیه و ارسال ایمیل به
      آدرس‌های فوق، از تجربیات آن‌ها بهره‌مند شوید، سوالات خود را مطرح کنید و در
      مورد موضوعات مختلف در رشته مهندسی کامپیوتر مشورت بگیرید. همچنین، این
      ارتباطات به شما فرصتی می‌دهد تا از فعالیت‌ها و پژوهش‌های اساتید در این
      حوزه مطلع شوید و با آن‌ها همکاری کنید.
    </p>
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
};

export default Contacts;
