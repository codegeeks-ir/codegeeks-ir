"use client";
import { useEffect, useState } from "react";

interface IProps {
  collapse: React.ReactNode;
  header: React.ReactNode;
  isShowByDefault: boolean;
}

const Accordion = ({ collapse, header, isShowByDefault }: IProps) => {
  const [showCollapse, setShowCollapse] = useState<boolean>(false);
  useEffect(() => setShowCollapse(isShowByDefault), []);
  return (
    <section>
      <button
        onClick={() => setShowCollapse(!showCollapse)}
        className={`btn-primary mx-0 my-0 w-full text-right text-sm 
        border-t-0
        rounded-none ${showCollapse && "bg-sky-300 border-y-0"}`}
      >
        {header}
      </button>
      <section
        className={`card bg-slate-300 rounded-t-none border-none my-0 ${
          showCollapse ? "block" : "hidden"
        }`}
      >
        {collapse}
      </section>
    </section>
  );
};

export default Accordion;
