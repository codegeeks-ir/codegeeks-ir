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

export default function EventStory({
  data,
  isReadyForExport,
  setIsReadyForExport,
}) {
  const subjectRef = useRef();
  const lecturerRef = useRef();
  useEffect(() => {
    textFit(subjectRef.current);
    setIsReadyForExport({ ...isReadyForExport, story: true });
    // textFit(lecturerRef.current);
  }, []);
  return (
    <div id="export-story" className="-right-3.5">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/background.png"
          width={270}
          height={270}
          alt="Background"
        />
      </div>
      <div className="story-heading">
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
      <div className="story-content">
        <div className="flex flex-row mt-8">
          <div className="profile-picture relative w-1/2">
            <Image
              src={`https://github.com/${data.githubID}.png`}
              alt={data.githubID}
              width={(50 * 270) / 100}
              height={(50 * 270) / 100}
            />
            <div className="relative w-7/12 h-full">
              <p className="github-icon non-important m-0 p-0">
                <GithubIcon className="fill-gray-700 w-5 h-auto" />
              </p>
              <p className="w-full text-center non-important -mt-0.5 mx-0 p-0">
                {data.githubID}
              </p>
            </div>
          </div>
          <div className="story-bio">
            <h2 className="w-full h-6" ref={lecturerRef}>
              {data.lecturer}
            </h2>
            <p className="m-0 mt-0.5">{data.bio}</p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          className="story-topics"
          dir="auto"
        ></div>
        <div className="absolute bottom-24 pb-4">
          <h3 className="m-0">{getPersianDate(data.date.split(" ")[0])}</h3>
          <div className="flex flex-row items-center m-0">
            <p className="mt-0.5 -mb-2 px-0 py-1">
              <ClockIcon className="fill-gray-700 w-3 h-auto" />
            </p>
            <p className="my-0 px-0">ساعت {data.date.split(" ")[1]}</p>
          </div>
          <div className="flex flex-row items-center m-0">
            <p className="mt-0.5 -mb-2 px-0 py-1">
              <LocationIcon className="fill-gray-700 w-3 h-auto" />
            </p>
            <p className="my-0 px-0">{data.location}</p>
          </div>
        </div>
      </div>
      <div className="story-icons">
        <UutIcon className="fill-slate-200 h-12 w-auto" />
        <CulturalIcon className="fill-slate-200 h-12 w-auto" />
        <CeituutIcon className="fill-slate-200 h-10 w-auto" />
      </div>
    </div>
  );
}
