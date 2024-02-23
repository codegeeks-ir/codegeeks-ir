import { DataType } from "utils/schema/collections/data-type";
import DateProperty from "./date-property";
import NumberProperty from "./number-property";
import StringProperty from "./string-property";
import TimeProperty from "./time-property";

enum PropertyType {
  String = "string",
  Number = "number",
  Date = "date",
  Time = "time",
  Select = "select",
}

type Property = DateProperty | NumberProperty | StringProperty | TimeProperty;

type Properties<Data extends DataType> = Record<keyof Data, Property>;

export { PropertyType, type Property, type Properties };
