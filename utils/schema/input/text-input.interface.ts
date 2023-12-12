import { IInput, InputElementType } from "./input-type";

interface IText extends IInput {
  type: InputElementType.Text;
  placeholder: string;
}

export default IText;
