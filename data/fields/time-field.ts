import ITimeProperty from "utils/schema/properties/time-property.interface";
import { PropertyType } from "utils/schema/properties";

const timeField: ITimeProperty = {
  filters: undefined,
  isValid: function (data: string) {
    const transformed = data.trim();
    return (
      transformed.length <= 5 &&
      0 <= Number.parseInt(transformed.split(":")[0]) &&
      Number.parseInt(transformed.split(":")[0]) < 24 &&
      0 <= Number.parseInt(transformed.split(":")[1]) &&
      Number.parseInt(transformed.split(":")[1]) < 60
    );
  },
  parse: function (data) {
    return this.isValid(data) ? data : "00:00";
  },
  propertyType: PropertyType.Time,
};

export default timeField;
