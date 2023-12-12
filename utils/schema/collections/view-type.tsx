import getFileData from "utils/get-data/get-data";
import BlogView from "./blog/blog-view";
import ChallengeView from "./challenge/challenge-view";
import PageView from "./page/page-view";
import CompanionView from "./companion/companion-view";
import { Format } from "./data-type";
import FaqView from "./faq/faq-view";
import { DataType } from "utils/schema/collections/data-type";
import { referenceFactory } from "utils/schema/collections/reference-type";
import getContent from "utils/get-data/get-content";

type ContentType = string;

type ItemType = {
  data: DataType;
  content: ContentType;
};

const getItem = async (
  fileName: string,
  directory: string,
): Promise<ItemType> => {
  const data = (await getFileData(fileName, directory)) as DataType;
  data.reference = await referenceFactory(data);
  const content = (await getContent(fileName, directory)) as ContentType;
  return { data, content };
};

const ViewFactory = ({ item }: { item: ItemType }) => {
  switch (item?.data.format) {
    case Format.Blog:
      return <BlogView item={item} />;
    case Format.Challenges:
      return <ChallengeView item={item} />;
    case Format.Page:
      return <PageView item={item} />;
    case Format.Companions:
      return <CompanionView item={item} />;
    case Format.Csv:
      return <FaqView item={item} />;
    case Format.Events:
      return <FaqView item={item} />;
    case Format.Faqs:
      return <FaqView item={item} />;
  }
};

export { type ContentType, type ItemType, getItem, ViewFactory };
