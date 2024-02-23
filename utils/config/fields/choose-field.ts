import IOptionsProperty from "utils/schema/properties/options-property.interface";
import IOptions, { IChoose } from "utils/schema/filters/options.interface";
import { PropertyType } from "utils/schema/properties";

const chooseField: IOptionsProperty = {
  filters: {
    options: { selection: {} as IChoose } as IOptions,
  },
  isValid: function (data) {
    const options = (this.filters.options.selection as IChoose).options;
    return options.includes(data);
  },
  parse: function (data) {
    const options = (this.filters.options.selection as IChoose).options;
    return this.isValid(data) ? data : options[0];
  },
  propertyType: PropertyType.Options,
};

export default chooseField;
