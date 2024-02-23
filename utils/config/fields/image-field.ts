import { PropertyType } from "utils/schema/properties";
import IImageProperty from "utils/schema/properties/image-property.interface";

const imageField: IImageProperty = {
  filters: undefined,
  form: { isRequired: false },
  isValid: () => true,
  propertyType: PropertyType.Image,
};

export default imageField;
