import BlogElement from "./blog/blog-element";
import ChallengeElement from "./challenge/challenge-element";
import CompanionElement from "./companion/companion-element";
import CsvElement from "./csv/csv-element";
import { DataType, Format } from "./data-type";
import EventElement from "./event/event-element";
import FaqElement from "./faq/faq-element";
import PageElement from "./page/page-element";

interface IProps {
  data: DataType;
}

const ElementFactory = ({ data }: IProps) => {
  switch (data.format) {
    case Format.Blog:
      return <BlogElement data={data} />;
    case Format.Challenges:
      return <ChallengeElement data={data} />;
    case Format.Companions:
      return <CompanionElement data={data} />;
    case Format.Csv:
      return <CsvElement data={data} />;
    case Format.Events:
      return <EventElement data={data} />;
    case Format.Faqs:
      return <FaqElement data={data} />;
    case Format.Page:
      return <PageElement data={data} />;
  }
};

export { ElementFactory };
