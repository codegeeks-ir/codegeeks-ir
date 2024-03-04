import ISearch from "utils/schema/filters/search.interface";
import ITextProperty from "utils/schema/properties/text-property.interface";
import titleField from "./title-field";

const descriptionField: ITextProperty = {
  ...titleField,
  filters: {
    search: { priority: 2 } as ISearch,
  },
  minCharacters: 2,
  maxCharacters: 200,
};

export default descriptionField;
