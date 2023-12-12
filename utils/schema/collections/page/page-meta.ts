import { Properties } from "utils/schema/properties/property-type";
import IPageData from "./page-data";

const collectionMeta: Properties<IPageData> = {
  slug: {
    isSearchable: false,
    localName: "عنوان",
  },
  title: {
    isSearchable: true,
    localName: "نام مجموعه",
  },
  description: {
    isSearchable: true,
    localName: "شرح مختصر",
  },
  heading: {
    isSearchable: true,
    localName: "عبارت سربرگ",
  },
  format: {
    isSearchable: false,
    localName: "فرمت",
  },
  reference: {
    isSearchable: false,
    localName: "",
  },
};

export default collectionMeta;
