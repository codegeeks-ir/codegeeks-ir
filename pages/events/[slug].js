import { getSlugs, getItem } from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Event from "components/events/Event";
import EventPost from "components/events/EventPost";
import EventStory from "components/events/EventStory";
import EventPdf from "components/events/EventPdf";
import html2canvas from "html2canvas";
import ShareIcon from "public/icones/share.svg";

const postOptions = {
  width: 270,
  height: 270,
  scale: 4,
  windowWidth: 270,
  windowHeight: 270,
};

const storyOptions = {
  width: 270,
  height: 480,
  scale: 4,
  windowWidth: 270,
  windowHeight: 480,
};

const pdfOptions = {
  width: 793.3,
  height: 1122,
  scale: 2,
  windowWidth: 793.3,
  windowHeight: 1122,
};

const html2pdfOptions = {
  filename: "myfile.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
};

async function exportAsImage(element, options, luncherLink, fileName) {
  await html2canvas(element, options).then((canvas) => {
    const downloadLink = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    canvas.remove();
    luncherLink.setAttribute("href", downloadLink);
    luncherLink.setAttribute("download", fileName);
    luncherLink.click();
  });
}

async function exportAsPdf(
  element,
  html2canvasOptions,
  html2pdfOptions,
  luncherLink,
  fileName
) {
  await html2canvas(element, html2canvasOptions).then((canvas) => {
    require("html2pdf.js")()
      .set(html2pdfOptions)
      .from(canvas)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        const downloadLink = pdf.output("bloburl");
        luncherLink.setAttribute("href", downloadLink);
        luncherLink.setAttribute("download", fileName);
        luncherLink.click();
      });
    canvas.remove();
  });
}

export default function EventPage({ data }) {
  const exportLink = useRef();
  const postRef = useRef();
  const storyRef = useRef();
  const pdfRef = useRef();
  const [showExport, setShowExport] = useState({
    post: false,
    story: false,
    pdf: false,
  });
  const [isReadyForExport, setIsReadyForExport] = useState({
    post: false,
    story: false,
    pdf: false,
  });
  async function exportPost() {
    await exportAsImage(
      postRef.current,
      postOptions,
      exportLink.current,
      `${data.title}-post.png`
    ).then(() => {
      setShowExport({ ...showExport, post: false });
      setIsReadyForExport({ ...isReadyForExport, post: false });
    });
  }
  async function exportStory() {
    await exportAsImage(
      storyRef.current,
      storyOptions,
      exportLink.current,
      `${data.title}-story.png`
    ).then(() => {
      setShowExport({ ...showExport, story: false });
      setIsReadyForExport({ ...isReadyForExport, story: false });
    });
  }
  async function exportPdf() {
    await exportAsPdf(
      pdfRef.current,
      pdfOptions,
      html2pdfOptions,
      exportLink.current,
      `${data.title}`
    ).then(() => {
      setShowExport({ ...showExport, pdf: false });
      setIsReadyForExport({ ...isReadyForExport, pdf: false });
    });
  }
  useEffect(() => {
    if (isReadyForExport.post) exportPost();
    if (isReadyForExport.story) exportStory();
    if (isReadyForExport.pdf) exportPdf();
  }, [isReadyForExport]);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="رویدادها, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="رویدادها و کارگاه‌های فنی و علمی انجمن"
        />
        <title>{`${data.title} | انجمن کامپیوتر صنعتی ارومیه`}</title>
      </Head>
      <div className="w-full">
        <Event data={data} />
        <div ref={postRef}>
          {showExport.post ? (
            <EventPost
              data={data}
              isReadyForExport={isReadyForExport}
              setIsReadyForExport={setIsReadyForExport}
            />
          ) : null}
        </div>
        <div ref={storyRef}>
          {showExport.story ? (
            <EventStory
              data={data}
              isReadyForExport={isReadyForExport}
              setIsReadyForExport={setIsReadyForExport}
            />
          ) : null}
        </div>
        <div ref={pdfRef}>
          {showExport.pdf ? (
            <EventPdf
              data={data}
              isReadyForExport={isReadyForExport}
              setIsReadyForExport={setIsReadyForExport}
            />
          ) : null}
        </div>
        <a ref={exportLink}></a>
        <div className="p-0 mt-8">
          <h1 className="card-title m-0">
            <ShareIcon className="fill-gray-700 w-4 md:w-6 sm:w-4 ml-4" />
            اشتراک گذاری رویداد
          </h1>
          <p>
            شما می توانید تصاویر مناسب شبکه های اجتماعی را ذخیره کرده و به
            اشتراک بگذارید.
          </p>
          <div className="card-button pt-3 justify-center">
            <button
              className="btn-primary"
              onClick={async () => setShowExport({ ...showExport, post: true })}
            >
              دریافت تصویر پست
            </button>
            <button
              className="btn-primary"
              onClick={async () =>
                setShowExport({ ...showExport, story: true })
              }
            >
              دریافت تصویر استوری
            </button>
            <button
              className="btn-primary"
              onClick={async () => setShowExport({ ...showExport, pdf: true })}
            >
              دریافت نسخه چاپی
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

EventPage.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getItem(`${params.slug}.md`, "collections/events/events");
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getSlugs("collections/events/events");
  return { paths, fallback: false };
}
