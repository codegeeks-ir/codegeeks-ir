import ChallengeItem from "components/collection/item/ChallengeItem";
import EventItem from "components/collection/item/EventItem";
import PostItem from "components/collection/item/PostItem";
import FaqItem from "components/collection/item/FaqItem";
import CourseItem from "components/collection/item/CourseItem";
import DocItem from "components/collection/item/DocItem";
import ProjectItem from "components/collection/item/ProjectItem";

export default function Results({currentPageResults, collectionType}) {
  return (
    <>
      {currentPageResults.map((item) => {
        switch (collectionType) {
          case "challenges":
            return <ChallengeItem item={item} key={item.slug} />;
          case "courses":
            return <CourseItem item={item} key={item.slug} />;
          case "docs":
            return <DocItem item={item} key={item.slug} />;
          case "events":
            return <EventItem item={item} key={item.slug} />;
          case "faqs":
            return <FaqItem item={item} key={item.slug} />;
          case "posts":
            return <PostItem item={item} key={item.slug}/>;
          case "projects":
            return <ProjectItem item={item} key={item.slug} />;
          default:
            break;
        }
      })}
    </>
  );
}
