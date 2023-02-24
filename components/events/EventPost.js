import GithubIcon from "public/icones/social/github.svg";
import ClockIcon from "public/icones/clock.svg";
import LocationIcon from "public/icones/location.svg";
import CeituutIcon from "public/icones/ceituut/ceituut-icon.svg";
import CulturalIcon from "public/icones/uut/uut-cultural-affairs.svg";
import UutIcon from "public/icones/uut/uut-icon.svg";
import textFit from "textfit";
import Image from "next/image";
import { getPersianDate } from "lib/persian-long-date";
import { useEffect, useRef } from "react";

export default function EventPost({
  data,
  isReadyForExport,
  setIsReadyForExport,
}) {
  const subjectRef = useRef();
  const lecturerRef = useRef();
  useEffect(() => {
    textFit(subjectRef.current);
    setIsReadyForExport({ ...isReadyForExport, post: true });
    // textFit(lecturerRef.current);
  }, []);
  return (
    <div id="export-post" className="-right-3.5">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/background.png"
          width={270}
          height={270}
          alt="Background"
        />
      </div>
      <div className="post-heading">
        <p className="p-0 m-0 mt-0.5">
          انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه برگزار می کند
        </p>
        <h1
          ref={subjectRef}
          className="text-center w-full h-12 p-1 m-0"
          dir="auto"
        >
          {data.title}
        </h1>
      </div>
      <div className="post-content">
        <div className="flex flex-row">
          <div className="profile-picture relative w-1/3">
            <Image
              src={`https://github.com/${data.githubID}.png`}
              alt={data.githubID}
              width={(40 * 270) / 100}
              height={(40 * 270) / 100}
            />
            <div className="relative w-9/12 h-full">
              <p className="github-icon non-important m-0 p-0">
                <GithubIcon className="fill-gray-700 w-3 h-auto" />
              </p>
              <p className="w-full text-center non-important -mt-0.5 mx-0 p-0">
                {data.githubID}
              </p>
            </div>
          </div>
          <div className="post-bio">
            <h2 className="w-full h-6" ref={lecturerRef}>
              {data.lecturer}
            </h2>
            <p className="m-0 mt-0.5">{data.bio}</p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          className="post-topics"
          dir="auto"
        ></div>
        <div className="absolute bottom-1 pb-1">
          <h3 className="m-0">{getPersianDate(data.date.split(" ")[0])}</h3>
          <div className="flex flex-row items-center m-0 p-0">
            <p className="text-3xs mt-0.5 -mb-2 px-0 py-1">
              <ClockIcon className="fill-gray-700 w-2 h-auto" />
            </p>
            <p className="text-3xs my-0 px-0">ساعت {data.date.split(" ")[1]}</p>
          </div>
          <div className="flex flex-row items-center m-0 p-0">
            <p className="text-3xs mt-0.5 -mb-2 px-0 py-1">
              <LocationIcon className="fill-gray-700 w-2 h-auto" />
            </p>
            <p className="text-3xs my-0 px-0">{data.location}</p>
          </div>
        </div>
      </div>
      <div className="post-icons">
        <CeituutIcon className="fill-slate-200 w-12 h-auto" />
        <CulturalIcon className="fill-slate-200 w-12 h-auto" />
        <UutIcon className="fill-slate-200 w-12 h-auto" />
      </div>
    </div>
  );
}
