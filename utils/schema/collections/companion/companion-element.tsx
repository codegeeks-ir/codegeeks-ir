"use client";
import ICompanionData from "../companion/companion-data";
import Item from "components/collection/Item";
import { Format } from "../data-type";

interface IProps {
  data: ICompanionData;
}

const CompanionElement = ({ data }: IProps) => (
  <Item
    title={data.name}
    subtitle={data.position}
    excerpt={data.excerpt}
    footerRightData={data.githubID}
    footerLeftData={""}
    link={`${Format.Companions}/${data.slug}`}
    isHot={false}
    key={data.slug}
  />
);

export default CompanionElement;
