import BlogElement from "./blog/blog-element";
import ChallengeElement from "./challenge/challenge-element";
import CompanionElement from "./companion/companion-element";
import CsvElement from "./csv/csv-element";
import { DataType, Format } from "./data-type";
import EventElement from "./event/event-element";
import FaqElement from "./faq/faq-element";
import PageElement from "./page/page-element";
import { ReferenceType } from "./reference-type";

interface IProps {
  data: DataType;
  reference: ReferenceType;
}

const ElementFactory = ({ data, reference }: IProps) => {
  switch (data.format) {
    case Format.Blog:
      return <BlogElement data={data} reference={reference} />;
    case Format.Challenges:
      return <ChallengeElement data={data} />;
    case Format.Companions:
      return <CompanionElement data={data} />;
    case Format.Csv:
      return <CsvElement data={data} reference={reference} />;
    case Format.Events:
      return <EventElement data={data} reference={reference} />;
    case Format.Faqs:
      return <FaqElement data={data} />;
    case Format.Page:
      return <PageElement data={data} reference={reference} />;
  }
};

export { ElementFactory };
