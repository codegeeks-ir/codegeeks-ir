import { Format, SlugType } from "../data-type";
import { ReferenceType } from "../reference-type";

interface ICompanionData {
  slug: SlugType;
  name: string;
  position: string;
  excerpt: string;
  githubID: string;
  reference?: ReferenceType;
  format: Format.Companions;
  path: string;
}

export default ICompanionData;
