"use client";
import ICompanionData from "../companion/companion-data";
import Card from "components/collection/Card";
import { Format } from "../data-type";

interface IProps {
  data: ICompanionData;
}

const CompanionElement = ({ data }: IProps) => (
  <Card
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
