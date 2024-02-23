import IOptions, { ISelect } from "utils/schema/filters/options.interface";
import IFaq from "utils/schema/data/faq.interface";
import { MetaType } from "utils/schema/meta.type";
import { DataType, Format } from "utils/schema/data";
import { FieldType } from "../fields";
import fields from "../fields";
import IOptionsProperty from "utils/schema/properties/options-property.interface";
import { Element } from "utils/schema/elements";

const faqMeta: MetaType<Format.Faqs, IFaq> = {
  format: Format.Faqs,
  properties: {
    slug: fields[FieldType.Slug],
    title: fields[FieldType.Title],
    excerpt: fields[FieldType.Excerpt],
    categories: {
      ...fields[FieldType.Select],
      filters: {
        options: {
          selection: {
            options: [
              { option: "انجمن", isSelected: false },
              { option: "دانشگاه", isSelected: false },
            ],
            size: 2,
          } as ISelect,
        } as IOptions,
      },
    } as IOptionsProperty,
  },
  getElement: (data: DataType) => {
    const casted = data as IFaq;
    return {
      type: Element.Card,
      props: {
        title: casted.title,
        subtitle: casted.categories,
        excerpt: casted.excerpt,
        footerRightData: "",
        footerLeftData: "",
        link: `${Format.Faqs}/${casted.slug}`,
        isHot: false,
      },
    };
  },
};

export default faqMeta;
