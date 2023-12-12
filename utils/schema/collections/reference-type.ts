import getBlogReference from "./blog/blog-reference";
import getChallengeReference from "./challenge/challenge-reference";
import getCollectionReference from "./page/page-reference";
import getCompanionReference from "./companion/companion-reference";
import getCsvReference from "./csv/csv-reference";
import { DataType, Format } from "./data-type";
import getEventReference from "./event/event-reference";
import getFaqReference from "./faq/faq-reference";

type ReferenceType = DataType | DataType[] | undefined;

type GetReferenceType = (data: DataType) => Promise<ReferenceType>;

const referenceFactory = async (data: DataType) => {
  switch (data.format) {
    case Format.Blog:
      return await getBlogReference(data);
    case Format.Challenges:
      return await getChallengeReference(data);
    case Format.Page:
      return await getCollectionReference(data);
    case Format.Companions:
      return await getCompanionReference(data);
    case Format.Csv:
      return await getCsvReference(data);
    case Format.Events:
      return await getEventReference(data);
    case Format.Faqs:
      return await getFaqReference(data);
  }
};

export { type ReferenceType, type GetReferenceType, referenceFactory };
