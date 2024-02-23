import { Element } from ".";

interface IAvatarElement {
  type: Element.Avatar;
  props: {
    github: string;
    imageSource: string;
    link: string;
    isCompanion: boolean;
  };
}

export default IAvatarElement;
