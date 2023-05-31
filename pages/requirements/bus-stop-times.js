import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getContentCollection, getPropCollection } from "lib/get-collection";
import TableFromCsv from "components/TableFromCsv";
import Head from "next/head";
import Tabs from "components/Tabs";

const BusStopTimes = ({ contactPropCollection, contactContentCollection }) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="زمان سرویس‌ها, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="زمان حرکت سرویس‌های دانشگاه صنعتی ارومیه"
        />
        <title>زمان سرویس‌ها | انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <h2>زمان سرویس‌ها</h2>
      <Tabs
        headers={["دانشکده", "دانشگاه", "ایثار", "برگشت ایثار"]}
        contents={contactPropCollection.map((item, index) => (
          <TableFromCsv
            csvString={contactContentCollection[index].content}
            comments={item.comments}
            key={index}
          />
        ))}
      />
    </>
  );
};

BusStopTimes.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const contactPropCollection = await getPropCollection(
    "collections/requirements/data/bus-stop-times",null, false);
  const contactContentCollection = await getContentCollection(
    "collections/requirements/data/bus-stop-times", null, false);
  return {
    props: {
      contactPropCollection,
      contactContentCollection,
    },
  };
}

export default BusStopTimes;
