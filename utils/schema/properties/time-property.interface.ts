import { IProperty, PropertyType } from "utils/schema/properties";

interface ITimeProperty extends IProperty {
  filters: undefined;
  propertyType: PropertyType.Time;
}

export default ITimeProperty;
