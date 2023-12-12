import { DataType } from "utils/schema/collections/data-type";
import { Format } from "./data-type";
import blogMeta from "./blog/blog-meta";
import challengeMeta from "./challenge/challenge-meta";
import collectionMeta from "./page/page-meta";
import companionMeta from "./companion/companion-meta";
import csvMeta from "./csv/csv-meta";
import eventMeta from "./event/event-meta";
import faqMeta from "./faq/faq-meta";

const metaFactory = (format: Format) => {
  switch (format) {
    case Format.Blog:
      return blogMeta;
    case Format.Challenges:
      return challengeMeta;
    case Format.Page:
      return collectionMeta;
    case Format.Companions:
      return companionMeta;
    case Format.Csv:
      return csvMeta;
    case Format.Events:
      return eventMeta;
    case Format.Faqs:
      return faqMeta;
  }
};

type MetaType = ReturnType<typeof metaFactory>;

const getSearchables = (format: Format) => {
  const meta = metaFactory(format);
  return Object.entries(meta)
    .filter((entery) => entery[1].isSearchable)
    ?.map((entery) => entery[0] as keyof DataType);
};

export { metaFactory, type MetaType, getSearchables };
