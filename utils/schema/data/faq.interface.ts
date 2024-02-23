import { Format } from ".";
import SlugType from "utils/schema/slug.type";

interface IFaq {
  slug: SlugType;
  title: string;
  excerpt: string;
  categories: string;
  format: Format.Faqs;
  path: string;
}

export default IFaq;
