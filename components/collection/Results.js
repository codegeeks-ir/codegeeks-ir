import ChallengeItem from "components/collection/item/ChallengeItem";
import EventItem from "components/collection/item/EventItem";
import PostItem from "components/collection/item/PostItem";
import FaqItem from "components/collection/item/FaqItem";

const Results = ({ currentPageResults, collectionType }) => (
  <>
    {currentPageResults.map((item) => {
      switch (collectionType) {
        case "challenges":
          return <ChallengeItem item={item} key={item.slug} />;
        case "events":
          return <EventItem item={item} key={item.slug} />;
        case "faqs":
          return <FaqItem item={item} key={item.slug} />;
        case "posts":
          return <PostItem item={item} key={item.slug} />;
        default:
          break;
      }
    })}
  </>
);

export default Results;
