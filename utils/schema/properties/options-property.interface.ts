import IOptions from "utils/schema/filters/options.interface";
import { IProperty, PropertyType } from "utils/schema/properties";
import { FilterType } from "../filters";

interface IOptionsProperty extends IProperty {
  filters: {
    [FilterType.Options]: IOptions;
  };
  propertyType: PropertyType.Options;
}

export default IOptionsProperty;
