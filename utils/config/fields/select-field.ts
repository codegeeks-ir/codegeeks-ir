import IOptionsProperty from "utils/schema/properties/options-property.interface";
import IOptions, { ISelect } from "utils/schema/filters/options.interface";
import { PropertyType } from "utils/schema/properties";

const selectField: IOptionsProperty = {
  filters: {
    options: { selection: {} as ISelect } as IOptions,
  },
  parse: function (data) {
    const options = (this.filters.options.selection as ISelect).options;
    return this.isValid(data) ? data : options[0].option;
  },
  isValid: function (data) {
    const options = (this.filters.options.selection as ISelect).options;
    return options.map((item) => item.option).includes(data);
  },
  propertyType: PropertyType.Options,
};

export default selectField;
