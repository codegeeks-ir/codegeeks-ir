import ISearch from "utils/schema/filters/search.interface";
import ISort from "utils/schema/filters/sort.interface";
import { IProperty, PropertyType } from "utils/schema/properties";
import { FilterType } from "../filters";

interface ILinkProperty extends IProperty {
  filters: {
    [FilterType.Search]?: ISearch;
    [FilterType.Sort]?: ISort;
  };
  imageSource?: (data: string) => string;
  propertyType: PropertyType.Link;
}

export default ILinkProperty;
