import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import Head from "next/head";

const Custom500 = () => (
  <>
    <Head>
      <meta name="robots" content="noindex,nofollow" />
      <title>مشکل از ماست</title>
    </Head>
    <div>
      <h1>500</h1>
      <p>
        <strong>مشکل از ماست</strong>
      </p>
    </div>
  </>
);

Custom500.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export default Custom500;
