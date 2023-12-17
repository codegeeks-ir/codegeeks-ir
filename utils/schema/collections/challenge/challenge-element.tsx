"use client";
import Card from "components/collection/Card";
import { getPersianLongDate } from "lib/persian-long-date";
import { Format } from "../data-type";
import IChallengeData from "./challenge-data";

interface IProps {
  data: IChallengeData;
}

const ChallengeElement = ({ data }: IProps) => (
  <Card
    title={data.title}
    subtitle={`امتیاز ${data.score}`}
    excerpt={data.excerpt}
    footerRightData={getPersianLongDate(data.date)}
    footerLeftData={`ساعت ${data.date.split(" ")[1]}`}
    link={`${Format.Challenges}/${data.slug}`}
    isHot={new Date() <= new Date(data.date)}
    key={data.slug}
  />
);

export default ChallengeElement;
