import { useEffect, useRef, useState } from "react";
import Event from "./Event";
import EventPost from "./EventPost";
import EventStory from "./EventStory";
import EventPdf from "./EventPdf";
import html2canvas from "html2canvas";
import ShareIcon from "public/icones/share.svg";
import { ProviderType } from "utils/schema/provider.interface";
import IEvent from "utils/schema/data/event.interface";
import ICompanion from "utils/schema/data/companion.interface";

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

const exportAsImage = async (element, options, luncherLink, fileName) => {
  await html2canvas(element, options).then((canvas) => {
    const downloadLink = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    canvas.remove();
    luncherLink.setAttribute("href", downloadLink);
    luncherLink.setAttribute("download", fileName);
    luncherLink.click();
  });
};

const exportAsPdf = async (
  element,
  html2canvasOptions,
  html2pdfOptions,
  luncherLink,
  fileName,
) => {
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
};

const EventView = ({ provider }: { provider: ProviderType }) => {
  const data = provider.data as IEvent;
  const companion = data.reference as ICompanion;
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
  const exportPost = async () => {
    await exportAsImage(
      postRef.current,
      postOptions,
      exportLink.current,
      `${(provider.data as IEvent).title}-post.png`,
    ).then(() => {
      setShowExport({ ...showExport, post: false });
      setIsReadyForExport({ ...isReadyForExport, post: false });
    });
  };
  const exportStory = async () => {
    await exportAsImage(
      storyRef.current,
      storyOptions,
      exportLink.current,
      `${(provider.data as IEvent).title}-story.png`,
    ).then(() => {
      setShowExport({ ...showExport, story: false });
      setIsReadyForExport({ ...isReadyForExport, story: false });
    });
  };
  const exportPdf = async () => {
    await exportAsPdf(
      pdfRef.current,
      pdfOptions,
      html2pdfOptions,
      exportLink.current,
      `${(provider.data as IEvent).title}`,
    ).then(() => {
      setShowExport({ ...showExport, pdf: false });
      setIsReadyForExport({ ...isReadyForExport, pdf: false });
    });
  };
  useEffect(() => {
    if (isReadyForExport.post) exportPost();
    if (isReadyForExport.story) exportStory();
    if (isReadyForExport.pdf) exportPdf();
  }, [isReadyForExport]);
  return (
    <div className="w-full">
      <Event data={data} content={provider.content} companion={companion} />
      <div ref={postRef}>
        {showExport.post ? (
          <EventPost
            data={data}
            content={provider.content}
            companion={companion}
            isReadyForExport={isReadyForExport}
            setIsReadyForExport={setIsReadyForExport}
          />
        ) : null}
      </div>
      <div ref={storyRef}>
        {showExport.story ? (
          <EventStory
            data={data}
            content={provider.content}
            companion={companion}
            isReadyForExport={isReadyForExport}
            setIsReadyForExport={setIsReadyForExport}
          />
        ) : null}
      </div>
      <div ref={pdfRef}>
        {showExport.pdf ? (
          <EventPdf
            data={data}
            content={provider.content}
            companion={companion}
            isReadyForExport={isReadyForExport}
            setIsReadyForExport={setIsReadyForExport}
          />
        ) : null}
      </div>
      <a ref={exportLink}></a>
      <div className="mt-8 p-0">
        <h1 className="card-title m-0">
          <ShareIcon className="ml-4 w-4 fill-slate-700 sm:w-4 md:w-6" />
          اشتراک گذاری رویداد
        </h1>
        <p>
          شما می توانید تصاویر مناسب شبکه های اجتماعی را ذخیره کرده و به اشتراک
          بگذارید.
        </p>
        <div className="card-footer flex-nowrap rounded-md">
          <button
            className="btn-primary my-0 rounded-b-none"
            onClick={async () => setShowExport({ ...showExport, post: true })}
          >
            دریافت تصویر پست
          </button>
          <button
            className="btn-primary my-0 rounded-b-none"
            onClick={async () => setShowExport({ ...showExport, story: true })}
          >
            دریافت تصویر استوری
          </button>
          <button
            className="btn-primary my-0 rounded-b-none"
            onClick={async () => setShowExport({ ...showExport, pdf: true })}
          >
            دریافت نسخه چاپی
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventView;