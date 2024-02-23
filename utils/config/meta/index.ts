import { DataType, Format } from "utils/schema/data";
import blogMeta from "./blog-meta";
import challengeMeta from "./challenge-meta";
import companionMeta from "./companion-meta";
import csvMeta from "./csv-meta";
import eventMeta from "./event-meta";
import faqMeta from "./faq-meta";
import pageMeta from "./page-meta";
import { MetaType } from "utils/schema/meta.type";

const metas: Record<Format, MetaType<Format, DataType>> = {
  [Format.Blog]: blogMeta,
  [Format.Challenges]: challengeMeta,
  [Format.Companions]: companionMeta,
  [Format.Csv]: csvMeta,
  [Format.Events]: eventMeta,
  [Format.Faqs]: faqMeta,
  [Format.Page]: pageMeta,
};

export default metas;
