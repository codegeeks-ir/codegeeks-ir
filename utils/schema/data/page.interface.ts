import { Format } from "../data-type";
import { ReferenceType } from "../reference-type";

type IPageData = {
  slug: Format;
  title: string;
  excerpt: string;
  description: string;
  heading: string;
  reference?: ReferenceType;
  format: Format.Page;
  mainRoute?: string;
  path: string;
};

export default IPageData;
