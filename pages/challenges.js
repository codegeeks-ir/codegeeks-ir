import { getPropCollection } from "lib/get-collection";
import challengesProperties from "collection-properties/challengesProperties";
import DefaultLayout from "layouts/DefaultLayout";
import PageHeader from "components/PageHeader";
import Collection from "components/collection/Collection";
import Head from "next/head";

const Challenges = ({ propCollection, collectionType, properties }) => (
  <>
    <Head>
      <meta
        name="keywords"
        content="مسابقات, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
      />
      <meta
        name="description"
        content="در این قسمت شما با چالش‌هایی پیش‌رو مواجه خواهید شد که تمامی
          مهارت‌های تخصصی و ذهنیت شما را در زمینه کدنویسی به چالش می‌کشند. این
          مسابقات به شما فرصتی عالی برای نمایش دانش و توانایی‌هایتان در حل مسائل
          کامپیوتری و تفکر خلاقانه را می‌دهد."
      />
      <title>مسابقات | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه</title>
    </Head>
    <div className="collection-container">
      <PageHeader />
      <div className="page-header">
        <h1>مسابقات</h1>
        <p>
          به عنوان انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه، با افتخار به ارائه
          قسمتی مهم و هیجان انگیز در رویدادهای ما می‌پردازیم: مسابقات چالش
          کدنویسی. در این قسمت شما با چالش‌هایی پیش‌رو مواجه خواهید شد که تمامی
          مهارت‌های تخصصی و ذهنیت شما را در زمینه کدنویسی به چالش می‌کشند. این
          مسابقات به شما فرصتی عالی برای نمایش دانش و توانایی‌هایتان در حل مسائل
          کامپیوتری و تفکر خلاقانه را می‌دهد.
        </p>
      </div>
      <Collection
        propCollection={propCollection}
        collectionType={collectionType}
        properties={properties}
      />
    </div>
  </>
);

Challenges.getLayout = (content) => <DefaultLayout>{content}</DefaultLayout>;

export const getStaticProps = async () => {
  const propCollection = await getPropCollection(
    "collections/challenges/challenges",
    "challenges"
  );
  const collectionType = challengesProperties.collectionType;
  const properties = Object.values(challengesProperties.properties);
  return {
    props: {
      collectionType,
      properties,
      propCollection,
    },
  };
};

export default Challenges;
