import { getPersianLongDate } from "lib/persian-long-date";
import Item from "./Item";

const Results = ({ currentPageResults, collectionType }) => (
  <>
    {currentPageResults.map((item) => {
      switch (collectionType) {
        case "companions":
          return (
            <Item
              title={item.name}
              subtitle={item.position}
              footerRightData={item.githubID}
              footerLeftData={""}
              link={item.link}
              key={item.slug}
            />
          );
        case "challenges":
          return (
            <Item
              title={item.title}
              subtitle={`امتیاز ${item.score}`}
              footerRightData={getPersianLongDate(item.date)}
              footerLeftData={`ساعت ${item.date.split(" ")[1]}`}
              link={item.link}
              key={item.slug}
            />
          );
        case "events":
          return (
            <Item
              title={item.title}
              subtitle={item.lecturer}
              footerRightData={getPersianLongDate(item.date)}
              footerLeftData={`ساعت ${item.date.split(" ")[1]}`}
              link={item.link}
              key={item.slug}
            />
          );
        case "faqs":
          return (
            <Item
              title={item.title}
              subtitle={item.categories}
              footerRightData={""}
              footerLeftData={""}
              link={item.link}
              key={item.slug}
            />
          );
        case "blog":
          return (
            <Item
              title={item.title}
              subtitle={item.categories}
              footerRightData={getPersianLongDate(item.date)}
              footerLeftData={""}
              link={item.link}
              key={item.slug}
            />
          );
        default:
          break;
      }
    })}
  </>
);

export default Results;
