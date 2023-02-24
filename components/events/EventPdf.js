import GithubIcon from "public/icones/social/github.svg";
import ClockIcon from "public/icones/clock.svg";
import LocationIcon from "public/icones/location.svg";
import CeituutIcon from "public/icones/ceituut/ceituut-icon.svg";
import CulturalIcon from "public/icones/uut/uut-cultural-affairs.svg";
import UutIcon from "public/icones/uut/uut-icon.svg";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import textFit from "textfit";
import { getPersianDate } from "lib/persian-long-date";
import { useEffect, useRef } from "react";
import { baseUrl } from "pages/_app";

export default function EventPdf({
  data,
  isReadyForExport,
  setIsReadyForExport,
}) {
  const subjectRef = useRef();
  const lecturerRef = useRef();
  useEffect(() => {
    textFit(subjectRef.current, { widthOnly: true });
    setIsReadyForExport({ ...isReadyForExport, pdf: true });
    // textFit(lecturerRef.current);
  }, []);
  return (
    <div id="export-pdf" className="relative -right-16">
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
          className="text-center w-full h-24 p-1 m-0"
          dir="auto"
        >
          {data.title}
        </h1>
      </div>
      <div className="pdf-content">
        <div className="flex flex-col items-start">
          <div className="profile-picture relative w-2/5">
            <Image
              src={`https://github.com/${data.githubID}.png`}
              alt={data.githubID}
              width={(40 * 1080) / 100}
              height={(40 * 1080) / 100}
            />
            <div className="relative w-9/12 h-full">
              <p className="github-icon non-important">
                <GithubIcon className="fill-gray-700 w-12 h-auto" />
              </p>
            </div>
          </div>
          <div className="pdf-bio">
            <h2 className="w-full h-12" ref={lecturerRef}>
              {data.lecturer}
            </h2>
            <p className="m-0 mt-0.5">{data.bio}</p>
          </div>
        </div>
        <div className="flex flex-row absolute bottom-5 pb-3">
          <QRCodeSVG
            value={`${baseUrl}/events/${data.slug}`}
            bgColor="#e2e8f0"
            fgColor="#374151"
            className="ml-4"
          />
          <div className="flex flex-col">
            <p className="m-0">{getPersianDate(data.date.split(" ")[0])}</p>
            <div className="flex flex-row items-center m-0 p-0">
              <p className="mt-0 -mb-10">
                <ClockIcon className="fill-gray-700 w-8 h-auto" />
              </p>
              <p className="mt-0 mb-0">ساعت {data.date.split(" ")[1]}</p>
            </div>
            <div className="flex flex-row items-center m-0 p-0">
              <p className="mt-0 -mb-10">
                <LocationIcon className="fill-gray-700 w-8 h-auto" />
              </p>
              <p className="mt-0 mb-0">{data.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pdf-icons">
        <CeituutIcon className="fill-slate-200 w-40 h-auto" />
        <CulturalIcon className="fill-slate-200 w-40 h-auto" />
        <UutIcon className="fill-slate-200 w-40 h-auto" />
      </div>
    </div>
  );
}
