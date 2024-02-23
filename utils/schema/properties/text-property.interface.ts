import ISort from "utils/schema/filters/sort.interface";
import { IProperty, PropertyType } from "utils/schema/properties";
import ISearch from "../filters/search.interface";
import { FilterType } from "../filters";

interface ITextProperty extends IProperty {
  filters: {
    [FilterType.Search]?: ISearch;
    [FilterType.Sort]?: ISort;
  };
  minCharacters: number;
  maxCharacters: number;
  propertyType: PropertyType.Text;
}

export default ITextProperty;
