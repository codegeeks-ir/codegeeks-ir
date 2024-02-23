"use client";
import { Format } from "utils/schema/data";
import BlogView from "./BlogView";
import ChallengeView from "./ChallengeView";
import CompanionView from "./CompanionView";
import FaqView from "./FaqView";
import PageView from "./PageView";
import { ProviderType } from "utils/schema/provider.interface";
import EventView from "./EventView";

interface IProps {
  provider: ProviderType;
}

const ViewFactory = ({ provider }: IProps) => {
  const views: Record<Format, React.ReactNode> = {
    [Format.Blog]: <BlogView provider={provider} />,
    [Format.Challenges]: <ChallengeView provider={provider} />,
    [Format.Companions]: <CompanionView provider={provider} />,
    [Format.Csv]: <FaqView provider={provider} />, /////////
    [Format.Events]: <EventView provider={provider} />, /////
    [Format.Faqs]: <FaqView provider={provider} />,
    [Format.Page]: <PageView provider={provider} />,
  };
  return views[provider.data.format];
};

export default ViewFactory;
