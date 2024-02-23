"use client";
import Card from "components/collection/Card";
import { Format } from "../data-type";
import IFaqData from "./faq-data";

interface IProps {
  data: IFaqData;
}

const FaqElement = ({ data }: IProps) => (
  <Card
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

export default FaqElement;
