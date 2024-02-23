import { getDataCollection } from "utils/get-data/get-collection";
import IBlogData from "../blog/blog-data";
import { GetReferenceType } from "../reference-type";
import ICompanionData from "./companion-data";
import IEventData from "../event/event-data";
import { DataType } from "../data-type";

const getCompanionReference: GetReferenceType = async (data: DataType) => {
  const allPosts = await getDataCollection("docs/collections/blog");
  const allEvents = await getDataCollection("docs/collections/events");
  const posts = allPosts.filter(
    (post) => (post as IBlogData).writer == (data as ICompanionData).githubID,
  );
  const events = allEvents.filter(
    (event) =>
      (event as IEventData).lecturer == (data as ICompanionData).githubID,
  );
  return [...posts, ...events];
};

export default getCompanionReference;
