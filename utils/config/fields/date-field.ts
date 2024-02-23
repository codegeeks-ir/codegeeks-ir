import IRange from "utils/schema/filters/range.interface";
import ISort from "utils/schema/filters/sort.interface";
import { PropertyType } from "utils/schema/properties";
import IDateProperty from "utils/schema/properties/date-property.interface";

const dateField: IDateProperty = {
  filters: {
    range: {
      min: new Date(-8640000000000000).getDate(),
      max: new Date(8640000000000000).getDate(),
    } as IRange,
    sort: { isAsscending: false } as ISort,
  },
  form: { isRequired: true },
  isValid: (data) => true,
  parse: function (data) {
    return this.isValid(data) ? new Date(data) : new Date();
  },
  propertyType: PropertyType.Date,
};

export default dateField;
