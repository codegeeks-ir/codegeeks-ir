import GithubIcon from "public/icones/social/github.svg";
import ClockIcon from "public/icones/clock.svg";
import LocationIcon from "public/icones/location.svg";
import CodegeeksIcon from "public/icones/codegeeks/codegeeks-icon.svg";
import CulturalIcon from "public/icones/uut/uut-cultural-affairs.svg";
import UutIcon from "public/icones/uut/uut-icon.svg";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import textFit from "textfit";
import { getPersianLongDate } from "lib/persian-long-date";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import config from "data/config";
import IEvent from "utils/schema/data/event.interface";
import { ContentType } from "utils/schema/provider.interface";
import ICompanion from "utils/schema/data/companion.interface";

interface IProps {
  data: IEvent;
  content: ContentType;
  companion: ICompanion;
  isReadyForExport: {
    post: boolean;
    story: boolean;
    pdf: boolean;
  };
  setIsReadyForExport: Dispatch<
    SetStateAction<{
      post: boolean;
      story: boolean;
      pdf: boolean;
    }>
  >;
}

const EventPdf = ({
  data,
  content,
  companion,
  isReadyForExport,
  setIsReadyForExport,
}: IProps) => {
  const subjectRef = useRef();
  const lecturerRef = useRef();
  const bioRef = useRef();
  const baseUrl = config.url;
  useEffect(() => {
    textFit(subjectRef.current, { widthOnly: true });
    // textFit(lecturerRef.current, { widthOnly: true });
    // textFit(bioRef.current);
    setIsReadyForExport({ ...isReadyForExport, pdf: true });
  }, []);
  return (
    <div id="export-pdf">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/background.png"
          width={1080}
          height={1080}
          alt="Background"
        />
      </div>
      <div className="pdf-heading">
        <p>انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه برگزار می کند</p>
        <h1
          ref={subjectRef}
          className="m-0 h-24 w-full p-1 text-center"
          dir="auto"
        >
          {data.title}
        </h1>
      </div>
      <div className="pdf-content">
        <div className="flex flex-col items-start">
          <div className="profile-picture relative w-2/5">
            <Image
              src={`/images/${data.lecturer}.png`}
              alt={data.lecturer}
              width={(40 * 1080) / 100}
              height={(40 * 1080) / 100}
            />
            <div className="relative h-full w-9/12">
              <p className="github-icon non-important">
                <GithubIcon className="h-auto w-12 fill-slate-700" />
              </p>
            </div>
          </div>
          <div className="pdf-bio">
            <h2 className="h-12 w-full" ref={lecturerRef}>
              {companion.name}
            </h2>
            <p className="m-0 mt-4" ref={bioRef}>
              {companion.position}
            </p>
          </div>
        </div>
        <div className="absolute bottom-5 flex flex-row pb-3">
          <QRCodeSVG
            value={`${baseUrl}/collections/events/${data.slug}`}
            bgColor="#e2e8f0"
            fgColor="#374151"
            className="ml-4"
          />
          <div className="flex flex-col">
            <p className="m-0">{getPersianLongDate(data.date)}</p>
            <div className="m-0 flex flex-row items-center p-0">
              <p className="mt-0 -mb-10">
                <ClockIcon className="h-auto w-8 fill-slate-700" />
              </p>
              <p className="mt-0 mb-0">
                ساعت {data.date.toTimeString().slice(0, 5)}
              </p>
            </div>
            <div className="m-0 flex flex-row items-center p-0">
              <p className="mt-0 -mb-10">
                <LocationIcon className="h-auto w-8 fill-slate-700" />
              </p>
              <p className="mt-0 mb-0">{data.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pdf-icons">
        <CodegeeksIcon className="h-auto w-40 fill-slate-300" />
        <CulturalIcon className="h-auto w-40 fill-slate-300" />
        <UutIcon className="h-auto w-40 fill-slate-300" />
      </div>
    </div>
  );
};

export default EventPdf;