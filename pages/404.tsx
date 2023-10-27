import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import Head from "next/head";

const Custom404 = () => (
  <>
    <Head>
      <meta name="robots" content="noindex,nofollow" />
      <title>۴۰۴ | اینجا کجاست؟</title>
    </Head>
    <div>
      <h1>404</h1>
      <p>
        <strong>اینجا کجاست ؟ 🙄</strong>
      </p>
    </div>
  </>
);

Custom404.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export default Custom404;
