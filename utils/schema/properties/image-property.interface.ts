import { IProperty, PropertyType } from "utils/schema/properties";

interface IImageProperty extends IProperty {
  filters: undefined;
  propertyType: PropertyType.Image;
}

export default IImageProperty;
