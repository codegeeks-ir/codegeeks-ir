import titleField from "./title-field";
import ITextProperty from "utils/schema/properties/text-property.interface";

const slugField: ITextProperty = {
  ...titleField,
  filters: {},
  minCharacters: 2,
  maxCharacters: 120,
};

export default slugField;
