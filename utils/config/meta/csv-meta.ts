import { IProperty, IRow } from "utils/schema/properties";
import IOptions, {
  ICheck,
  IChoose,
} from "utils/schema/filters/options.interface";
import ICsv from "utils/schema/data/csv.interface";
import { MetaType } from "utils/schema/meta.type";
import { DataType, Format } from "utils/schema/data";
import { FieldType } from "../fields";
import fields from "../fields";
import IOptionsProperty from "utils/schema/properties/options-property.interface";
import { Element } from "utils/schema/elements";
import { FilterType } from "utils/schema/filters";

const csvMeta: MetaType<Format.Csv, ICsv> = {
  format: Format.Csv,
  properties: {
    slug: fields[FieldType.Slug],
    title: fields[FieldType.Title],
    header: {
      ...fields[FieldType.Title],
      multiplicity: {
        rowSize: 10, ////////
      } as IRow,
    } as IProperty,
    type: {
      ...fields[FieldType.Choose],
      filters: {
        options: {
          selection: {
            options: Object.values(FilterType),
            selected: 0,
            size: Object.values(FilterType).length,
          } as IChoose,
        } as IOptions,
      },
    } as IOptionsProperty,
    show: {
      ...fields[FieldType.Check],
      filters: {
        options: {
          selection: {
            option: "نمایش",
            isSelected: false,
          } as ICheck,
        } as IOptions,
      },
    } as IOptionsProperty,
    version: fields[FieldType.Title],
    description: fields[FieldType.Description],
    rows: undefined, ////
    element: {
      ...fields[FieldType.Choose],
      filters: {
        options: {
          selection: {
            options: Object.values(Element),
            selected: 0,
            size: Object.values(Element).length,
          } as IChoose,
        },
      },
    } as IOptionsProperty,
  },
  getElement: (data: DataType) => {
    const casted = data as ICsv;
    switch (casted.element) {
      case Element.Rows:
        return {
          type: Element.Rows,
          props: {
            header: casted.header,
            description: casted.description,
            rows: casted.rows,
            type: casted.type,
            show: casted.show,
          },
        };
      case Element.Section:
        return {
          type: Element.Section,
          props: {
            header: casted.header,
            description: casted.description,
            rows: casted.rows,
            type: casted.type,
          },
        };
      case Element.Table:
      default:
        return {
          type: Element.Table,
          props: {
            header: casted.header,
            description: casted.description,
            rows: casted.rows,
            type: casted.type,
          },
        };
    }
  },
};

export default csvMeta;
