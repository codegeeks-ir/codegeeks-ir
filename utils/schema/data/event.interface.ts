import { Format } from ".";
import SlugType from "utils/schema/slug.type";
import ICompanion from "./companion.interface";

interface IEvent {
  slug: SlugType;
  title: string;
  excerpt: string;
  lecturer: string;
  date: Date;
  location: string;
  reference?: ICompanion;
  format: Format.Events;
  path: string;
}

export default IEvent;
