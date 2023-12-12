import { Properties, PropertyType } from "utils/schema/properties/property-type";
import IChallengeData from "./challenge-data";

const challengeMeta: Properties<IChallengeData> = {
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
  score: {
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

export default challengeMeta;
