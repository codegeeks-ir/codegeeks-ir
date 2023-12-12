import { IInput, InputElementType } from "./input-type";

interface IDate extends IInput {
  type: InputElementType.DateTimeLocal;
}

export default IDate;
