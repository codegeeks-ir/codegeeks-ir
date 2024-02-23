import { useRef } from "react";
import { ILocal } from "utils/schema/localization.type";
import { IProperty } from "utils/schema/properties";

interface IProps {
  field: IProperty;
  local: ILocal | undefined;
}

const TextForm = ({ field, local }: IProps) => {
  const id = local?.global.en.name;
  const label = local?.form ? local.form.fa.name : local?.global.fa.name;
  const userInput = useRef(null);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        className="form-element"
        placeholder={label}
        required={field.form?.isRequired}
        ref={userInput}
      />
    </>
  );
};

export default TextForm;
