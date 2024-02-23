import { DataType, Format } from "utils/schema/data";

enum Languages {
  English = "en",
  Farsi = "fa",
}

interface ITranslation {
  name: string;
  description: string;
}

interface ILocal {
  global: Record<Languages, ITranslation>;
  container?: Record<Languages, ITranslation>;
  filter?: Record<Languages, ITranslation>;
  sort?: Record<Languages, ITranslation>;
  form?: Record<Languages, ITranslation>;
}

type Locals<Data extends DataType> = Partial<Record<keyof Data, ILocal>>;

type LocalizationType<Type extends Format, Data extends DataType> = {
  format: Type;
  locals: Locals<Data>;
};

export { type ILocal, type Locals, type LocalizationType };
