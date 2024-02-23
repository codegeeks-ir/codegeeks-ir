import { Format } from ".";
import SlugType from "utils/schema/slug.type";
import IBlog from "./blog.interface";
import IEvent from "./event.interface";

interface ICompanion {
  slug: SlugType;
  name: string;
  position: string;
  excerpt: string;
  githubID: string;
  reference: (IBlog | IEvent)[];
  format: Format.Companions;
  path: string;
}

export default ICompanion;
