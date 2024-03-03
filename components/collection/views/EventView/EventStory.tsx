import GithubIcon from "public/icones/social/github.svg";
import ClockIcon from "public/icones/clock.svg";
import LocationIcon from "public/icones/location.svg";
import CodegeeksIcon from "public/icones/codegeeks/codegeeks-icon.svg";
import CulturalIcon from "public/icones/uut/uut-cultural-affairs.svg";
import UutIcon from "public/icones/uut/uut-icon.svg";
import textFit from "textfit";
import Image from "next/image";
import { getPersianLongDate } from "lib/persian-long-date";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
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

const EventStory = ({
  data,
  content,
  companion,
  isReadyForExport,
  setIsReadyForExport,
}: IProps) => {
  const subjectRef = useRef();
  const lecturerRef = useRef();
  const bioRef = useRef();
  useEffect(() => {
    textFit(subjectRef.current);
    textFit(lecturerRef.current);
    textFit(bioRef.current);
    setIsReadyForExport({ ...isReadyForExport, story: true });
  }, []);
  return (
    <div id="export-story">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/background.png"
          width={270}
          height={270}
          alt="Background"
        />
      </div>
      <div className="story-heading">
        <p className="m-0 mt-0.5 p-0">
          انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه برگزار می کند
        </p>
        <h1
          ref={subjectRef}
          className="m-0 h-12 w-full p-1 text-center"
          dir="auto"
        >
          {data.title}
        </h1>
      </div>
      <div className="story-content">
        <div className="mt-8 flex flex-row">
          <div className="profile-picture relative w-1/2">
            <Image
              src={`/images/${data.lecturer}.png`}
              alt={data.lecturer}
              width={(40 * 270) / 100}
              height={(40 * 270) / 100}
            />
            <div className="relative h-full w-7/12">
              <p className="github-icon non-important m-0 p-0">
                <GithubIcon className="h-auto w-5 fill-slate-700" />
              </p>
              <p className="non-important mx-0 -mt-0.5 w-full p-0 text-center">
                {data.lecturer}
              </p>
            </div>
          </div>
          <div className="story-bio">
            <h2 className="h-6 w-full" ref={lecturerRef}>
              {companion.name}
            </h2>
            <p className="m-0 mt-1" ref={bioRef}>
              {companion.position}
            </p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="story-topics"
          dir="auto"
        ></div>
        <div className="absolute bottom-24 pb-4">
          <h3 className="m-0">{getPersianLongDate(data.date)}</h3>
          <div className="m-0 flex flex-row items-center">
            <p className="mt-0.5 -mb-2 px-0 py-1">
              <ClockIcon className="h-auto w-3 fill-slate-700" />
            </p>
            <p className="my-0 px-0">
              ساعت {data.date.toTimeString().slice(0, 5)}
            </p>
          </div>
          <div className="m-0 flex flex-row items-center">
            <p className="mt-0.5 -mb-2 px-0 py-1">
              <LocationIcon className="h-auto w-3 fill-slate-700" />
            </p>
            <p className="my-0 px-0">{data.location}</p>
          </div>
        </div>
      </div>
      <div className="story-icons">
        <UutIcon className="h-10 w-auto fill-slate-300" />
        <CulturalIcon className="h-10 w-auto fill-slate-300" />
        <CodegeeksIcon className="h-8 w-auto fill-slate-300" />
      </div>
    </div>
  );
};

export default EventStory;