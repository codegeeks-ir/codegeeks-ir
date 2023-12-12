import ShareIcon from "public/icones/share.svg";

const ShareEvent = ({ exportLink, subject }) => {
  return (
    <div className="mt-8 p-0">
      <h1 className="card-title m-0">
        <ShareIcon className="ml-4 fill-slate-700 sm:w-4 md:w-6" />
        اشتراک گذاری رویداد
      </h1>
      <p>
        شما می توانید تصاویر مناسب شبکه های اجتماعی را ذخیره کرده و به اشتراک
        بگذارید.
      </p>
      <div className="card-footer justify-center pt-3">
        <a
          className="btn-primary"
          href={exportLink.postImage}
          download={`${subject}-post.png`}
        >
          دریافت تصویر پست
        </a>
        <a
          className="btn-primary"
          href={exportLink.storyImage}
          download={`${subject}-story.png`}
        >
          دریافت تصویر استوری
        </a>
        <a
          className="btn-primary"
          href={exportLink.printablePdf}
          download={`${subject}`}
        >
          دریافت نسخه چاپی
        </a>
      </div>
    </div>
  );
};

export default ShareEvent;
