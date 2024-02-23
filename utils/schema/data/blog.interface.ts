import { Format } from ".";
import SlugType from "utils/schema/slug.type";
import ICompanion from "./companion.interface";

interface IBlog {
  slug: SlugType;
  title: string;
  excerpt: string;
  date: Date;
  image: string;
  categories: string;
  description: string;
  writer: string;
  reference: ICompanion;
  format: Format.Blog;
  path: string;
}

export default IBlog;
