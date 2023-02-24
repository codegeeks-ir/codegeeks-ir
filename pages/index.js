import DefaultLayout from "layouts/DefaultLayout";
import Head from "next/head";
import CeituutIcon from "public/icones/ceituut/ceituut-icon.svg";
import GithubIcon from "public/icones/social/github.svg";

export default function Index({ content }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="انجمن کامپیوتر, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="انجمن علمی کامپیوتر و فناوری اطلاعات دانشگاه صنعتی ارومیه"
        />
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
        <title>انجمن کامپیوتر صنعتی ارومیه</title>
      </Head>
      <div className="flex flex-col flex-wrap items-center w-full">
        <CeituutIcon className="fill-slate-200 w-40 sm:w-44 md:w-64" />
        <div className="flex flex-row flex-wrap justify-center m-0 mt-20">
          <a
            className="btn-green flex flex-row flex-wrap 
                  justify-center w-20 py-0 m-0 ml-0.5 rounded-l-none"
            href="#"
          >
            <p className="text-sm m-0 mt-1 ml-1 py-1">ثبت نام</p>
          </a>
          <a
            className="btn-light flex flex-row flex-wrap 
                  justify-center items-center w-36 py-0 m-0 mr-0.5 rounded-r-none"
            href="{{ site.api }}"
          >
            <p className="text-sm m-0 mt-1 pl-2 py-1">ورود با</p>
            <p className="text-sm m-0 mt-1 ml-0.5 px-0 py-1">Github</p>
            <GithubIcon className="icon fill-gray-800 mb-0.5" />
          </a>
        </div>
      </div>
    </>
  );
}

Index.getLayout = function getLayout(index) {
  return <DefaultLayout>{index}</DefaultLayout>;
};
