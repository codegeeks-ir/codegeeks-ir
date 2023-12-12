import {
  getPersianLongDate,
} from "lib/persian-long-date";
import Item from "./Item";
import { DataType, Format } from "utils/schema/collections/data-type";
import ICompanionData from "utils/schema/collections/companion/companion-data";
import { ReferenceType } from "utils/schema/collections/reference-type";

const Results = ({
  results,
  reference,
}: {
  results: DataType[];
  reference?: ReferenceType;
}) =>
  results.map((data) => {
    switch (data.format) {
      case Format.Blog:
        return (
          <Item
            title={data.title}
            subtitle={data.categories}
            excerpt={data.excerpt}
            footerRightData={
              (reference
                ? (reference as ICompanionData)
                : (data.reference as ICompanionData)
              ).name
            }
            footerLeftData={getPersianLongDate(data.date)}
            link={`${Format.Blog}/${data.slug}`}
            isHot={new Date() <= new Date(data.date)}
            key={data.slug}
          />
        );
      case Format.Challenges:
        return (
          <Item
            title={data.title}
            subtitle={`امتیاز ${data.score}`}
            excerpt={data.excerpt}
            footerRightData={getPersianLongDate(data.date)}
            footerLeftData={`ساعت ${data.date.split(" ")[1]}`}
            link={`${Format.Challenges}/${data.slug}`}
            isHot={new Date() <= new Date(data.date)}
            key={data.slug}
          />
        );
      case Format.Companions:
        return (
          <Item
            title={data.name}
            subtitle={data.position}
            excerpt={data.excerpt}
            footerRightData={data.githubID}
            footerLeftData={""}
            link={`${Format.Companions}/${data.slug}`}
            isHot={false}
            key={data.slug}
          />
        );
      case Format.Events:
        return (
          <Item
            title={data.title}
            subtitle={
              (reference
                ? (reference as ICompanionData)
                : (data.reference as ICompanionData)
              ).name
            }
            excerpt={data.excerpt}
            footerRightData={getPersianLongDate(data.date)}
            footerLeftData={`ساعت ${data.date.split(" ")[1]}`}
            link={`${Format.Events}/${data.slug}`}
            isHot={new Date() <= new Date(data.date)}
            key={data.slug}
          />
        );
      case Format.Faqs:
        return (
          <Item
            title={data.title}
            subtitle={data.categories}
            excerpt={data.excerpt}
            footerRightData={""}
            footerLeftData={""}
            link={`${Format.Faqs}/${data.slug}`}
            isHot={false}
            key={data.slug}
          />
        );
      default:
        break;
    }
  });

export default Results;
