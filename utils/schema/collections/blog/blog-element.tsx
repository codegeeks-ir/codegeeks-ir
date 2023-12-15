"use client";
import ICompanionData from "../companion/companion-data";
import IBlogData from "./blog-data";
import { ReferenceType } from "../reference-type";
import Item from "components/collection/Item";
import { getPersianLongDate } from "lib/persian-long-date";
import { Format } from "../data-type";

interface IProps {
  data: IBlogData;
  reference: ReferenceType;
}

const BlogElement = ({ data, reference }: IProps) => (
  <Item
    title={data.title}
    subtitle={data.categories}
    excerpt={data.excerpt}
    footerRightData={
      (reference
        ? (reference as ICompanionData)
        : (data.reference as ICompanionData)
      ).name
    }
    footerLeftData={getPersianLongDate(data.date)}
    link={`${Format.Blog}/${data.slug}`}
    isHot={new Date() <= new Date(data.date)}
    key={data.slug}
  />
);

export default BlogElement;
