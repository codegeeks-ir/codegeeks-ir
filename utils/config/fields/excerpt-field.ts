import ISearch from "utils/schema/filters/search.interface";
import ITextProperty from "utils/schema/properties/text-property.interface";
import titleField from "./title-field";

const excerptField: ITextProperty = {
  ...titleField,
  filters: { search: { priority: 3 } as ISearch },
  form: undefined,
  minCharacters: 2,
  maxCharacters: 300,
};

export default excerptField;
