"use client";
import ICompanionData from "../companion/companion-data";
import Card from "components/collection/Card";
import { getPersianLongDate } from "lib/persian-long-date";
import { Format } from "../data-type";
import IEventData from "./event-data";

interface IProps {
  data: IEventData;
}

const EventElement = ({ data }: IProps) => (
  <Card
    title={data.title}
    subtitle={data.reference ? (data.reference as ICompanionData).name : ""}
    excerpt={data.excerpt}
    footerRightData={getPersianLongDate(data.date)}
    footerLeftData={`ساعت ${data.date.split(" ")[1]}`}
    link={`${Format.Events}/${data.slug}`}
    isHot={new Date() <= new Date(data.date)}
    key={data.slug}
  />
);

export default EventElement;
