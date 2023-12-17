import {
  Properties,
  PropertyType,
} from "utils/schema/properties/property-type";
import IPageData from "./page-data";

const pageMeta: Properties<IPageData> = {
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
  description: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  heading: {
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
  mainRoute: {
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

export default pageMeta;
