import { Format, SlugType } from "../data-type";
import { ReferenceType } from "../reference-type";

interface IChallengeData {
  slug: SlugType;
  title: string;
  excerpt: string;
  score: number;
  date: string;
  reference?: ReferenceType;
  format: Format.Challenges;
  path: string;
}

export default IChallengeData;
