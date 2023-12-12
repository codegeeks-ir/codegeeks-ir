import { IInput, InputElementType } from "./input-type";

interface INumber extends IInput {
  type: InputElementType.Number;
  min: number;
  max: number;
}

export default INumber;
