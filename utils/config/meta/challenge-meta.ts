import { FieldType } from "../fields";
import IChallenge from "utils/schema/data/challenge.interface";
import { MetaType } from "utils/schema/meta.type";
import { DataType, Format } from "utils/schema/data";
import fields from "../fields";
import { getPersianLongDate } from "lib/persian-long-date";
import { Element } from "utils/schema/elements";

const challengeMeta: MetaType<Format.Challenges, IChallenge> = {
  format: Format.Challenges,
  properties: {
    slug: fields[FieldType.Slug],
    date: fields[FieldType.Date],
    title: fields[FieldType.Title],
    excerpt: fields[FieldType.Excerpt],
    score: fields[FieldType.Score],
  },
  getElement: (data: DataType) => {
    const casted = data as IChallenge;
    return {
      type: Element.Card,
      props: {
        title: casted.title,
        subtitle: `امتیاز ${casted.score}`,
        excerpt: casted.excerpt,
        footerRightData: getPersianLongDate(casted.date),
        footerLeftData: `ساعت ${casted.date.toTimeString().slice(0, 5)}`,
        link: `${Format.Challenges}/${casted.slug}`,
        isHot: new Date() <= new Date(casted.date),
      },
    };
  },
};

export default challengeMeta;
