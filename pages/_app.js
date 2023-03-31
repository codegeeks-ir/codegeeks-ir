import styles from "public/css/output.css";
import highlightStyles from "public/css/highlight.min.css";
import visualStudioStyles from "public/css/vs2015.min.css";
import Head from "next/head";

export const pages = process.env.PAGES;
export const baseUrl = process.env.URL;

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="google" content="nositelinkssearchbox" />
        <meta
          name="keywords"
          content="انجمن کامپیوتر, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه"
        />
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
        <title>انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
