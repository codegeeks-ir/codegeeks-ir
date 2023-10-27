import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getContentCollection, getItem, getPropCollection } from "lib/get-collection";
import TableFromArray from "components/TableFromArray";
import Head from "next/head";
import Tabs from "components/Tabs";
import csvToArrayOfObjects from "lib/csv-to-array";

const BusStopTimes = ({ busStopPropCollection, busStopContentCollection, data }) => (
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
    "docs/data/bus-stop-times",
    null,
    false
  );
  let busStopContentCollection = await getContentCollection(
    "docs/data/bus-stop-times",
    null,
    false
  );
  busStopContentCollection = busStopContentCollection.map((item) =>
    csvToArrayOfObjects(item.content)
  );
  const data = await getItem("bus-stop-times.md", "docs/pages/requirements");
  return {
    props: {
      busStopPropCollection,
      busStopContentCollection,
      data
    },
  };
};

export default BusStopTimes;
