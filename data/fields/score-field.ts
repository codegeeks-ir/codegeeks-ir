import IRange from "utils/schema/filters/range.interface";
import ISort from "utils/schema/filters/sort.interface";
import INumberProperty from "../../schema/properties/number-property.interface";
import integerField from "./integer-field";

const scoreField: INumberProperty = {
  ...integerField,
  filters: {
    range: { min: 0, max: 100 } as IRange,
    sort: { isAsscending: true } as ISort,
  },
};

export default scoreField;
