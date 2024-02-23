import { DataType, Format } from "./data";
import ElementType from "./elements";
import { IProperty } from "./properties";
import ReferenceType from "./reference.type";

type Properties<Data extends DataType> = Partial<Record<keyof Data, IProperty>>;

type MetaType<Type extends Format, Data extends DataType> = {
  format: Type;
  properties: Properties<Data>;
  getReference?: (data: DataType) => Promise<ReferenceType>;
  getElement: (data: DataType) => ElementType;
};

export { type Properties, type MetaType };
