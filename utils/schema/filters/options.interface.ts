import { FilterType } from ".";

enum OptionsType {
  Check = "check",
  Choose = "choose",
  Select = "select",
}

interface ICheck {
  type: OptionsType.Check;
  option: string;
  isSelected: boolean;
}

interface IChoose {
  type: OptionsType.Choose;
  options: string[];
  selected: number;
  size: number;
}

interface ISelect {
  type: OptionsType.Select;
  options: { option: string; isSelected: boolean }[];
  size: number;
}

interface IOptions {
  type: FilterType.Options;
  selection: ICheck | IChoose | ISelect;
}

export default IOptions;
export { OptionsType, type ICheck, type IChoose, type ISelect };
