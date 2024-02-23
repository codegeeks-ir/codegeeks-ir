import { Locals } from "utils/schema/localization.type";
import { DataType, Format } from "utils/schema/data";
import blogLocalization from "./blog-localization";
import challengeLocalization from "./challenge-localization";
import companionLocalization from "./companion-localization";
import csvLocalization from "./csv-localization";
import eventLocalization from "./event-localization";
import faqLocalization from "./faq-localization";
import pageLocalization from "./page-localization";

const localizations: Record<Format, Locals<DataType>> = {
  [Format.Blog]: blogLocalization.locals,
  [Format.Challenges]: challengeLocalization.locals,
  [Format.Companions]: companionLocalization.locals,
  [Format.Csv]: csvLocalization.locals,
  [Format.Events]: eventLocalization.locals,
  [Format.Faqs]: faqLocalization.locals,
  [Format.Page]: pageLocalization.locals,
};

export default localizations;
