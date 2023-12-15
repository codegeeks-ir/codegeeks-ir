"use client";
import ICompanionData from "../companion/companion-data";
import { ReferenceType } from "../reference-type";
import Item from "components/collection/Item";
import { getPersianLongDate } from "lib/persian-long-date";
import { Format } from "../data-type";
import IEventData from "./event-data";

interface IProps {
  data: IEventData;
  reference: ReferenceType;
}

const EventElement = ({ data, reference }: IProps) => (
  <Item
    title={data.title}
    subtitle={
      (reference
        ? (reference as ICompanionData)
        : (data.reference as ICompanionData)
      ).name
    }
    excerpt={data.excerpt}
    footerRightData={getPersianLongDate(data.date)}
    footerLeftData={`ساعت ${data.date.split(" ")[1]}`}
    link={`${Format.Events}/${data.slug}`}
    isHot={new Date() <= new Date(data.date)}
    key={data.slug}
  />
);

export default EventElement;
