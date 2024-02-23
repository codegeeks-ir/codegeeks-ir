import IBlogData from "./blog/blog-data";
import IChallengeData from "./challenge/challenge-data";
import IPageData from "./page/page-data";
import ICompanionData from "./companion/companion-data";
import ICsvData from "./csv/csv-data";
import IEventData from "./event/event-data";
import IFaqData from "./faq/faq-data";

type SlugType = string;

enum Format {
  Page = "page",
  Csv = "csv",
  Blog = "blog",
  Challenges = "challenges",
  Companions = "companions",
  Events = "events",
  Faqs = "faqs",
}

type DataType =
  | IPageData
  | ICsvData
  | IBlogData
  | IChallengeData
  | ICompanionData
  | IEventData
  | IFaqData;

export { Format, type SlugType, type DataType };
