import GithubIcon from "public/icones/social/github.svg";
import ClockIcon from "public/icones/clock.svg";
import LocationIcon from "public/icones/location.svg";
import Image from "next/image";
import { getPersianDate } from "lib/persian-long-date";
import textFit from "textfit";
import { useEffect, useRef } from "react";

export default function Event({ data }) {
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
        <div className="profile-picture relative w-44 mb-4">
          <Image
            src={`/images/${data.githubID}.png`}
            width="176"
            height="176"
            alt={data.githubID}
          />
          <a className="github-icon relative" href={`https://github.com/${data.githubID}`}>
            <GithubIcon className="icon w-8" />
          </a>
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="my-0" ref={lecturerRef}>{data.lecturer}</h2>
          <p className="my-0">{data.bio}</p>
        </div>
      </div>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: data.content }}
        className="mt-6"
        dir="auto"
      ></div>
      <hr />
      <div className="pb-4 mt-6">
        <p className="date invisible m-0">
          {getPersianDate(data.date.split(" ")[0])}
        </p>
        <div className="flex flex-row items-center m-0 p-0">
          <p className="mt-0 mb-0">
            <ClockIcon className="icon md:w-6 sm:w-4" />
          </p>
          <p className="mt-0 mb-0">ساعت {data.date.split(" ")[1]}</p>
        </div>
        <div className="flex flex-row items-center m-0 p-0">
          <p className="mt-0 mb-0">
            <LocationIcon className="icon md:w-6 sm:w-4" />
          </p>
          <p className="mt-0 mb-0">{data.location}</p>
        </div>
      </div>
    </div>
  );
}
