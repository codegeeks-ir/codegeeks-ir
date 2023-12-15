import {
  Properties,
  PropertyType,
} from "utils/schema/properties/property-type";
import IFaqData from "./faq-data";

const faqMeta: Properties<IFaqData> = {
  slug: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  title: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  categories: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  reference: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  format: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  path: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
};

export default faqMeta;
