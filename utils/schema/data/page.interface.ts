import { Format } from ".";

type IPage = {
  slug: Format;
  title: string;
  excerpt: string;
  description: string;
  heading: string;
  format: Format.Page;
  mainRoute?: string;
  path: string;
};

export default IPage;
