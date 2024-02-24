import { IProperty } from "utils/schema/properties";
import IEvent from "utils/schema/data/event.interface";
import { MetaType } from "utils/schema/meta.type";
import { DataType, Format } from "utils/schema/data";
import { FieldType } from "../fields";
import fields from "../fields";
import config from "../config";
import getFileData from "utils/get-data/get-data";
import ICompanion from "utils/schema/data/companion.interface";
import { getPersianLongDate } from "lib/persian-long-date";
import { Element } from "utils/schema/elements";

const eventMeta: MetaType<Format.Events, IEvent> = {
  format: Format.Events,
  properties: {
    slug: fields[FieldType.Slug],
    date: fields[FieldType.Date],
    title: fields[FieldType.Title],
    excerpt: fields[FieldType.Excerpt],
    lecturer: fields[FieldType.Github],
    location: {
      ...fields[FieldType.Title],
      filters: undefined,
    } as IProperty,
  },
  getReference: async (data: DataType) => {
    const companion = await getFileData(
      `${(data as IEvent).lecturer}.md`,
      `${config.source.collections}/companions`,
    );
    return companion as ICompanion;
  },
  getElement: (data: DataType) => {
    const casted = data as IEvent;
    return {
      type: Element.Card,
      props: {
        title: casted.title,
        subtitle: casted.reference ? casted.reference.name : "",
        excerpt: casted.excerpt,
        footerRightData: getPersianLongDate(casted.date),
        footerLeftData: `ساعت ${casted.date.toTimeString().slice(0, 5)}`,
        link: `${Format.Events}/${casted.slug}`,
        isHot: new Date() <= new Date(casted.date),
      },
    };
  },
};

export default eventMeta;
