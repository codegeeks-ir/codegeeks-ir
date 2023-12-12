import IText from "../input/text-input.interface";
import { PropertyType } from "./property-type";

type TimeProperty = {
  isSearchable: boolean;
  localName: string;
  type: PropertyType.Time;
  form?: IText;
};

export default TimeProperty;
