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

type ProviderType = {
  data: DataType;
  content: ContentType;
};

const getProvider = async (
  fileName: string,
  directory: string
): Promise<ProviderType> => {
  const data = (await getFileData(fileName, directory)) as DataType;
  data.reference = await referenceFactory(data);
  const content = (await getContent(fileName, directory)) as ContentType;
  return { data, content };
};

const ViewFactory = ({ provider }: { provider: ProviderType }) => {
  switch (provider?.data.format) {
    case Format.Blog:
      return <BlogView provider={provider} />;
    case Format.Challenges:
      return <ChallengeView provider={provider} />;
    case Format.Page:
      return <PageView provider={provider} />;
    case Format.Companions:
      return <CompanionView provider={provider} />;
    case Format.Csv:
      return <FaqView provider={provider} />;
    case Format.Events:
      return <FaqView provider={provider} />;
    case Format.Faqs:
      return <FaqView provider={provider} />;
  }
};

export {
  type ContentType,
  type ProviderType,
  getProvider,
  ViewFactory,
};
