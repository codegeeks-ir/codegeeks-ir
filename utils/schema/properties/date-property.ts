import IDate from "../input/date-input.interface";
import { PropertyType } from "./property-type";

type DateProperty = {
  isSearchable: boolean;
  localName: string;
  type: PropertyType.Date;
  form?: IDate;
};

export default DateProperty;
