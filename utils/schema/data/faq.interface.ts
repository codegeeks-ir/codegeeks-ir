import { Format, SlugType } from "../data-type";
import { ReferenceType } from "../reference-type";

interface IFaqData {
  slug: SlugType;
  title: string;
  excerpt: string;
  categories: string;
  reference?: ReferenceType;
  format: Format.Faqs;
  path: string;
}

export default IFaqData;
