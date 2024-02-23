"use client";
import { useState } from "react";

interface IProps {
  label?: React.ReactNode;
  keys: string[];
  values: string[];
  onSelect: (option: string) => void;
  defaultOption: string;
}

const DropDown = ({ values, label, keys, onSelect, defaultOption }: IProps) => {
  const [showCollapse, setShowCollapse] = useState<boolean>(false);
  const [selected, setSelected] = useState(defaultOption);
  return (
    <section className="h-full w-full">
      <button
        onClick={() => setShowCollapse(!showCollapse)}
        className={`btn-primary mx-0 my-0  h-9 text-sm 
        flex items-center justify-center border-l-0 rounded-l-none
        rounded-b-none w-full
        ${showCollapse && "bg-teal-300"}`}
      >
        {label}
      </button>
      <section
        className={`card relative bg-slate-300 
        rounded-none border-none my-0 w-full
         ${showCollapse ? "flex flex-col" : "hidden"}`}
      >
        <section
          className="flex flex-col absolute w-64 
        border border-b-0 border-t-0 border-solid border-slate-400"
        >
          {keys.map((item, index) => (
            <button
              key={item}
              className={` m-0 rounded-none border-t-0 border-x-0 ${
                selected == item ? "btn-primary" : "btn-light"
              }`}
              onClick={() => {
                onSelect(item);
                setSelected(item);
                setShowCollapse(!showCollapse);
              }}
            >
              {values[index]}
            </button>
          ))}
        </section>
      </section>
    </section>
  );
};

export default DropDown;
