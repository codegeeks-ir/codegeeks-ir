"use client";
import ICompanionData from "../companion/companion-data";
import IBlogData from "./blog-data";
import Card from "components/collection/Card";
import { getPersianLongDate } from "lib/persian-long-date";
import { Format } from "../data-type";

interface IProps {
  data: IBlogData;
}

const BlogElement = ({ data }: IProps) => (
  <Card
    title={data.title}
    subtitle={data.categories}
    excerpt={data.excerpt}
    footerRightData={
      data.reference ? (data.reference as ICompanionData).name : ""
    }
    footerLeftData={getPersianLongDate(data.date)}
    link={`${Format.Blog}/${data.slug}`}
    isHot={new Date() <= new Date(data.date)}
    key={data.slug}
  />
);

export default BlogElement;
