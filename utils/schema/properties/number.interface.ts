import INumber from "../input/number-input.interface";
import { PropertyType } from "./property-type";

type NumberProperty = {
  isSearchable: boolean;
  localName: string;
  type: PropertyType.Number;
  form?: INumber;
};

export default NumberProperty;
