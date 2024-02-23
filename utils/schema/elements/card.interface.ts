import { Element } from ".";

interface ICardElement {
  type: Element.Card;
  props: {
    title: string;
    subtitle: string;
    excerpt: string;
    footerRightData: string;
    footerLeftData: string;
    link: string;
    isHot: boolean;
  };
}

export default ICardElement;
