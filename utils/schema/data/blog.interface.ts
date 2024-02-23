import { Format, SlugType } from "../data-type";
import { ReferenceType } from "../reference-type";

interface IBlogData {
  slug: SlugType;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  categories: string; ///// create type for this
  description: string;
  writer: string;
  reference?: ReferenceType;
  format: Format.Blog;
  path: string;
}

export default IBlogData;
