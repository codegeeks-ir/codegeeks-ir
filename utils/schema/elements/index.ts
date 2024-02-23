import IAvatarElement from "./avatar.interface";
import ICardElement from "./card.interface";
import IImageElement from "./image.interface";
import IRowsElement from "./rows.interface";
import ISectionElement from "./section.interface";
import ITableElement from "./table.interface";

enum Element {
  Card = "card",
  Rows = "rows",
  Section = "section",
  Table = "table",
  Image = "image",
  Avatar = "avatar",
}

type ElementType =
  | ICardElement
  | IRowsElement
  | ISectionElement
  | ITableElement
  | IImageElement
  | IAvatarElement;

export default ElementType;
export { Element };
