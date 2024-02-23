import IText from "../input/text-input.interface";
import { PropertyType } from "./property-type";

type StringProperty = {
  isSearchable: boolean;
  localName: string;
  type: PropertyType.String;
  form?: IText;
};

export default StringProperty;
