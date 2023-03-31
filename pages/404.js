import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <title>اینجا کجاست؟</title>
      </Head>
      <div>
        <h1>404</h1>
        <p>
          <strong>اینجا کجاست ؟ 🙄</strong>
        </p>
      </div>
    </>
  );
}

Custom404.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};
