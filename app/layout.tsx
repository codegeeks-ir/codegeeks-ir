import "public/css/output.css";
import "public/css/highlight.min.css";
import "public/css/vs2015.min.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Metadata } from "next";
import { Viewport } from "next";
import config from "data/config";
import PageHeader from "components/PageHeader";

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // shrinkToFit:no,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.title}`,
    default: config.title,
  },
  description: config.title,
  appleWebApp: {
    capable: true,
    title: config.title,
    statusBarStyle: "black-translucent",
  },
  // <meta name="mobile-web-app-capable" content="yes" />
  formatDetection: { telephone: false },
  metadataBase: new URL(config.url),
  // twitter: {
  //   card: "app",
  //   title: config.title,
  //   description: config.description,
  //   siteId: "1467726470533754880", ////////
  //   creator: "@nextjs", ////////
  //   creatorId: "1467726470533754880", /////
  //   images: {
  //     url: config.url + "/codegeeks-ir-og-800x600.png",
  //     alt: config.title,
  //   },
  //   app: {
  //     name: "twitter_app", ///////
  //     id: {
  //       iphone: "twitter_app://iphone", //////
  //       ipad: "twitter_app://ipad", /////
  //       googleplay: "twitter_app://googleplay", /////
  //     },
  //     url: {
  //       iphone: "https://iphone_url", //////
  //       ipad: "https://ipad_url", //////
  //     },
  //   },
  // },
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    siteName: config.name,
    images: [
      {
        url: config.url + "/codegeeks-ir-og-800x600.png",
        width: 800,
        height: 600,
      },
      {
        url: config.url + "/codegeeks-ir-og-1800x1600.png",
        width: 1800,
        height: 1600,
        alt: config.title,
      },
    ],
    locale: "fa",
    type: "website",
  },
  manifest: config.url + "/manifest.json",
  icons: {
    icon: config.url + "icones/codegeeks/codegeeks-icon.svg",
    apple: config.url + "icones/codegeeks/codegeeks-icon.svg",
  },
  other: {
    google: "nositelinkssearchbox",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <body className="flex flex-col items-center pb-36">
      <Navbar />
      <main className="container">
        <PageHeader />
        {children}
      </main>
      <Footer />
    </body>
  </html>
);

export default Layout;
