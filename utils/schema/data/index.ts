import IBlog from "./blog.interface";
import IChallenge from "./challenge.interface";
import ICompanion from "./companion.interface";
import ICsv from "./csv.interface";
import IEvent from "./event.interface";
import IFaq from "./faq.interface";
import IPage from "./page.interface";

enum Format {
  Blog = "blog",
  Challenges = "challenges",
  Companions = "companions",
  Csv = "csv",
  Events = "events",
  Faqs = "faqs",
  Page = "page",
}

// convert dataType to interface ?? or create basic interface that all ICollections extends it

type DataType = IBlog | IChallenge | ICompanion | ICsv | IEvent | IFaq | IPage;

export { Format, type DataType };
