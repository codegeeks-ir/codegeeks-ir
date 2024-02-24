import IPage from "utils/schema/data/page.interface";
import { MetaType } from "utils/schema/meta.type";
import { DataType, Format } from "utils/schema/data";
import { FieldType } from "../fields";
import fields from "../fields";
import { Element } from "utils/schema/elements";

const pageMeta: MetaType<Format.Page, IPage> = {
  format: Format.Page,
  properties: {
    slug: fields[FieldType.Slug],
    title: fields[FieldType.Title],
    description: fields[FieldType.Description],
    excerpt: fields[FieldType.Excerpt],
    heading: fields[FieldType.Title],
  },
  getElement: (data: DataType) => {
    const casted = data as IPage;
    return {
      type: Element.Card,
      props: {
        title: casted.title,
        subtitle: "",
        excerpt: casted.excerpt,
        footerRightData: "",
        footerLeftData: "",
        link: "",
        isHot: false,
      },
    };
  },
};

export default pageMeta;
