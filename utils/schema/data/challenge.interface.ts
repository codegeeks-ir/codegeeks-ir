import { Format } from ".";
import SlugType from "utils/schema/slug.type";

interface IChallenge {
  slug: SlugType;
  title: string;
  excerpt: string;
  score: number;
  date: Date;
  format: Format.Challenges;
  path: string;
}

export default IChallenge;
