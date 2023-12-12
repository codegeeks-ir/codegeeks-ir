import ISelect from "../input/select-input.interface";
import { PropertyType } from "./property-type";

type SelectProperty = {
  isSearchable: boolean;
  localName: string;
  type: PropertyType.Select;
  form?: ISelect;
};

export default SelectProperty;
