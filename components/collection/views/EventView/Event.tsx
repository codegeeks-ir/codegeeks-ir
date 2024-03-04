import GithubIcon from "public/icones/social/github.svg";
import ClockIcon from "public/icones/clock.svg";
import LocationIcon from "public/icones/location.svg";
import Image from "next/image";
import { getPersianLongDate } from "lib/persian-long-date";
import textFit from "textfit";
import { useEffect, useRef } from "react";
import IEvent from "utils/schema/data/event.interface";
import ICompanion from "utils/schema/data/companion.interface";
import { ContentType } from "utils/schema/provider.interface";

interface IProps {
  data: IEvent;
  content: ContentType;
  companion: ICompanion;
}

const Event = ({ data, content, companion }: IProps) => {
  const subjectRef = useRef();
  const lecturerRef = useRef();
  useEffect(() => {
    textFit(subjectRef.current);
    textFit(lecturerRef.current);
  }, []);
  return (
    <div className="flex flex-col">
      <h1 ref={subjectRef} dir="auto">
        {data.title}
      </h1>
      <div className="flex flex-col">
        <div className="profile-picture relative mb-4 w-44">
          <Image
            src={`/images/${data.lecturer}.png`}
            width="176"
            height="176"
            alt={data.lecturer}
          />
          <a
            className="github-icon relative"
            href={`https://github.com/${data.lecturer}`}
          >
            <GithubIcon className="icon w-8" />
          </a>
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="my-0" ref={lecturerRef}>
            {companion.name}
          </h2>
          <p className="my-0">{companion.position}</p>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="mt-6"
        dir="auto"
      ></div>
      <div className="mt-6 pb-4">
        <p className="date invisible m-0">{getPersianLongDate(data.date)}</p>
        <div className="m-0 flex flex-row items-center p-0">
          <p className="mt-0 mb-0">
            <ClockIcon className="icon sm:w-4 md:w-6" />
          </p>
          <p className="mt-0 mb-0">
            ساعت {data.date.toTimeString().slice(0, 5)}
          </p>
        </div>
        <div className="m-0 flex flex-row items-center p-0">
          <p className="mt-0 mb-0">
            <LocationIcon className="icon sm:w-4 md:w-6" />
          </p>
          <p className="mt-0 mb-0">{data.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;