import { Properties, PropertyType } from "utils/schema/properties/property-type";
import IEventData from "./event-data";

const eventMeta: Properties<IEventData> = {
  slug: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined
  },
  title: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined
  },
  lecturer: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined
  },
  date: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined
  },
  location: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined
  },
  reference: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined
  },
  format: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined
  },
  path: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined
  }
};

export default eventMeta;
