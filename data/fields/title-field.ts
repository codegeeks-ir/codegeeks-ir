import ISearch from "utils/schema/filters/search.interface";
import ITextProperty from "utils/schema/properties/text-property.interface";
import ISort from "utils/schema/filters/sort.interface";
import { PropertyType } from "utils/schema/properties";

const titleField: ITextProperty = {
  filters: {
    search: { priority: 1 } as ISearch,
    sort: { isAsscending: true } as ISort,
  },
  form: { isRequired: true },
  minCharacters: 2,
  maxCharacters: 120,
  isValid: function (data) {
    return this.minCharacters < data.length && data.length < this.maxCharacters;
  },
  parse: function (data) {
    return this.isValid(data) ? data : "";
  },
  propertyType: PropertyType.Text,
};

export default titleField;
