import { DataType } from "utils/schema/data";
import metas from "utils/config/meta";
import { Element } from "utils/schema/elements";
import Card from "./Card";
import ICardElement from "utils/schema/elements/card.interface";
import Rows from "./Rows";
import Section from "./Section";
import Table from "./Table";
import IRowsElement from "utils/schema/elements/rows.interface";
import ITableElement from "utils/schema/elements/table.interface";
import IImageElement from "utils/schema/elements/image.interface";
import IAvatarElement from "utils/schema/elements/avatar.interface";
import Avatar from "./Avatar";

interface IProps {
  data: DataType;
}

const ElementFactory = ({ data }: IProps) => {
  const element = metas[data.format].getElement(data);
  const elements: Record<Element, React.ReactNode> = {
    [Element.Card]: <Card {...(element as ICardElement).props} />,
    [Element.Rows]: <Rows {...(element as IRowsElement).props} />,
    [Element.Table]: <Table {...(element as ITableElement).props} />,
    [Element.Avatar]: <Avatar {...(element as IAvatarElement).props} />,
    [Element.Section]: <Section {...(element as IRowsElement).props} />,
    [Element.Image]: undefined,
  };
  return elements[element.type];
};

export default ElementFactory;
