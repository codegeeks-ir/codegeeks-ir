import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getContentCollection, getPropCollection } from "lib/get-collection";
import TableFromArray from "components/TableFromArray";
import Head from "next/head";
import Tabs from "components/Tabs";
import csvToArrayOfObjects from "lib/csv-to-array";

const BusStopTimes = ({ busStopPropCollection, busStopContentCollection }) => (
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
      <title>زمان سرویس‌ها | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
    </Head>
    <h2>زمان سرویس‌ها</h2>
    <p>
      شما میتوانید با استفاده از این صفحه زمان رفت و آمد سرویس اتوبوس دانشگاه
      صنعتی ارومیه واقع در جاده بند با دانشکده و خوابگاه ایثار مشاهده نمایید.
    </p>
    <Tabs
      headers={["دانشکده", "دانشگاه", "ایثار", "برگشت ایثار"]}
      contents={busStopPropCollection.map((item, index) => (
        <TableFromArray
          array={busStopContentCollection[index]}
          comments={item.comments}
          key={index}
        />
      ))}
    />
  </>
);

BusStopTimes.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async () => {
  const busStopPropCollection = await getPropCollection(
    "collections/requirements/data/bus-stop-times",
    null,
    false
  );
  let busStopContentCollection = await getContentCollection(
    "collections/requirements/data/bus-stop-times",
    null,
    false
  );
  busStopContentCollection = busStopContentCollection.map((item) =>
    csvToArrayOfObjects(item.content)
  );
  return {
    props: {
      busStopPropCollection,
      busStopContentCollection,
    },
  };
};

export default BusStopTimes;
