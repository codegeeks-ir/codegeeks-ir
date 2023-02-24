import styles from 'public/css/output.css'
import highlightStyles from 'public/css/highlight.min.css'
import visualStudioStyles from 'public/css/vs2015.min.css'

export const pages = process.env.PAGES;
export const baseUrl = process.env.URL;

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
