import IOptionsProperty from "utils/schema/properties/options-property.interface";
import IOptions, { ICheck } from "utils/schema/filters/options.interface";
import { PropertyType } from "utils/schema/properties";

const checkField: IOptionsProperty = {
  filters: {
    options: { selection: {} as ICheck } as IOptions,
  },
  isValid: (data) => data.trim() === "true" || data.trim() === "false",
  parse: function (data) {
    return this.isValid(data) && data.trim() === "true" ? true : false;
  },
  propertyType: PropertyType.Options,
};

export default checkField;
