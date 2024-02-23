import ISort from "utils/schema/filters/sort.interface";
import { IProperty, PropertyType } from "utils/schema/properties";
import IRange from "../filters/range.interface";
import { FilterType } from "../filters";

interface IDateProperty extends IProperty {
  filters: {
    [FilterType.Range]: IRange;
    [FilterType.Sort]: ISort;
  };
  propertyType: PropertyType.Date;
}

export default IDateProperty;
