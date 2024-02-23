import { Format, SlugType } from "../data-type";
import { ReferenceType } from "../reference-type";

interface IEventData {
  slug: SlugType;
  title: string;
  excerpt: string;
  lecturer: string;
  date: string;
  location: string;
  reference?: ReferenceType;
  format: Format.Events;
  path: string;
}

export default IEventData;
