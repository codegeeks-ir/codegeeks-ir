"use client";
import "public/css/output.css";
import "public/css/highlight.min.css";
import "public/css/vs2015.min.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Metadata } from "next";
import { Viewport } from "next";
import config from "utils/config";

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // shrinkToFit:no,
  viewportFit: "cover",
};

export const metaData: Metadata = {
  title: {
    template: "%s | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه",
    default: "انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه",
  },
  description: "انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه",
  twitter: {
    card: "app",
    title: "انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه",
    description: "انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: {
      url: "https://nextjs.org/og.png",
      alt: "Next.js Logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },
  openGraph: {
    title: "انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه",
    description: "انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه",
    url: config.url,
    siteName: config.name,
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "fa",
    type: "website",
  },
  manifest: config.url + "/manifest.json",
  // icons: {
  //   icon: {
  //     type: 'image/svg+xml',
  //     href: '/images/favicon.svg'
  //   },
  //   shortcut: {
  //     type: 'image/svg+xml',
  //     href: '/images/favicon.svg'
  //   },
  //   apple: {
  //     type: 'image/svg+xml',
  //     href: '/images/favicon.svg'
  //   },
  //   other: {
  //     type: 'image/svg+xml',
  //     rel: 'apple-touch-icon',
  //     url: '/icones/codegeeks/codegeeks-icon.svg'
  /* <meta charSet="utf-8" /> */
  // },
  other: {
    google: "nositelinkssearchbox",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <body>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </body>
  </html>
);

export default Layout;
