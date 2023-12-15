"use client";
import Item from "components/collection/Item";
import { Format } from "../data-type";
import IFaqData from "./faq-data";

interface IProps {
  data: IFaqData;
}

const FaqElement = ({ data }: IProps) => (
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

export default FaqElement;
