import { IFormElement } from "./input-type";

interface ISelect extends IFormElement {
  label: string;
  options: { value: string; selected: boolean }[];
  multiple?: boolean;
  size?: number;
}

export default ISelect;
