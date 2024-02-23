import IRange from "utils/schema/filters/range.interface";
import ISort from "utils/schema/filters/sort.interface";
import INumberProperty from "../../schema/properties/number-property.interface";
import { PropertyType } from "utils/schema/properties";

const integerField: INumberProperty = {
  filters: {
    range: {
      min: Number.MIN_SAFE_INTEGER,
      max: Number.MAX_SAFE_INTEGER,
    } as IRange,
    sort: { isAsscending: true } as ISort,
  },
  isValid: function (data) {
    const value = Number.parseInt(data);
    const range = this.filters.range;
    return !Number.isNaN(value) && range.min <= value && value <= range.max;
  },
  parse: function (data) {
    return this.isValid(data) ? Number.parseInt(data) : 0;
  },
  propertyType: PropertyType.Number,
};

export default integerField;
