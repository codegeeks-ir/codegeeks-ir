import IOptions, { ISelect } from "utils/schema/filters/options.interface";
import IBlog from "utils/schema/data/blog.interface";
import { MetaType } from "utils/schema/meta.type";
import { DataType, Format } from "utils/schema/data";
import { FieldType } from "../fields";
import fields from "../fields";
import IOptionsProperty from "utils/schema/properties/options-property.interface";
import getFileData from "utils/get-data/get-data";
import config from "../config";
import ICompanion from "utils/schema/data/companion.interface";
import { getPersianLongDate } from "lib/persian-long-date";
import { Element } from "utils/schema/elements";

const blogMeta: MetaType<Format.Blog, IBlog> = {
  format: Format.Blog,
  properties: {
    slug: fields[FieldType.Slug],
    date: fields[FieldType.Date],
    title: fields[FieldType.Title],
    excerpt: fields[FieldType.Excerpt],
    image: fields[FieldType.Image],
    categories: {
      ...fields[FieldType.Select],
      filters: {
        options: {
          selection: {
            options: [
              { option: "انجمن", isSelected: false },
              { option: "مقاله", isSelected: false },
            ],
            size: 2,
          } as ISelect,
        } as IOptions,
      },
    } as IOptionsProperty,
    description: fields[FieldType.Description],
    writer: fields[FieldType.Github],
  },
  getReference: async (data: DataType) => {
    const writer = (await getFileData(
      `${(data as IBlog).writer}.md`,
      `${config.source.collections}/companions`,
    )) as ICompanion;
    return writer;
  },
  getElement: (data: DataType) => {
    const casted = data as IBlog;
    return {
      type: Element.Card,
      props: {
        title: casted.title,
        subtitle: casted.categories,
        excerpt: casted.excerpt,
        footerRightData: casted.reference
          ? (casted.reference as ICompanion).name
          : "",
        footerLeftData: getPersianLongDate(casted.date),
        link: `${Format.Blog}/${casted.slug}`,
        isHot: new Date() <= new Date(casted.date),
      },
    };
  },
};

export default blogMeta;
