import IDate from "./date-input.interface";
import INumber from "./number-input.interface";
import ISelect from "./select-input.interface";
import IText from "./text-input.interface";

interface IFormElement {
  name: string;
  id: string;
  value: string;
  className: string;
  required: boolean;
}

enum InputElementType {
  Button = "button",
  Checkbox = "checkbox",
  Color = "color",
  Date = "date",
  DateTimeLocal = "datetime-local",
  Email = "email",
  File = "file",
  Hidden = "hidden",
  Image = "image",
  Month = "month",
  Number = "number",
  Password = "password",
  Radio = "radio",
  Range = "range",
  Reset = "reset",
  Search = "search",
  Submit = "submit",
  Tel = "tel",
  Text = "text",
  Time = "time",
  Url = "url",
  Week = "week",
}

interface IInput extends IFormElement {
  label: string;
  type: InputElementType;
  isSearchable: boolean;
}

type IInputField = IText | INumber | IDate | ISelect;

export { InputElementType, type IFormElement, type IInput, type IInputField };
