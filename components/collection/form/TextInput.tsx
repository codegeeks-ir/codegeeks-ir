import { useRef } from "react";
import IText from "utils/schema/input/text-input.interface";

const TextInput = ({
  name,
  id,
  type,
  value,
  className,
  label,
  placeholder,
  required,
}: IText) => {
  const userInput = useRef(null);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        required={required}
        ref={userInput}
      />
    </>
  );
};

export default TextInput;
