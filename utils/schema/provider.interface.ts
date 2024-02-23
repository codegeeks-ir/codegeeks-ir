import { DataType } from "./data";

type ContentType = string;

interface ProviderType {
  data: DataType;
  content: ContentType;
}

export { type ContentType, type ProviderType };
