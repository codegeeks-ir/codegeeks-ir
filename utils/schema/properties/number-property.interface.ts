import IRange from "utils/schema/filters/range.interface";
import ISort from "utils/schema/filters/sort.interface";
import { IProperty, PropertyType } from "utils/schema/properties";
import { FilterType } from "../filters";

interface INumberProperty extends IProperty {
  filters: {
    [FilterType.Range]: IRange;
    [FilterType.Sort]?: ISort;
  };
  propertyType: PropertyType.Number;
}

export default INumberProperty;
