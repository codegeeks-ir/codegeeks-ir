import { useEffect, useState } from "react";

const Accordion = ({ collapseData, headerData, isShowByDefault }) => {
  const [showCollapse, setShowCollapse] = useState(false);
  useEffect(() => setShowCollapse(isShowByDefault), []);
  return (
    <>
      <button
        onClick={() => setShowCollapse(!showCollapse)}
        className="btn-light w-full rounded-b-none m-0 mt-2"
      >
        {headerData}
      </button>
      <div
        className={`m-0 -mt-6 ${showCollapse ? "block" : "hidden"}`}
        dangerouslySetInnerHTML={{ __html: collapseData.content }}
      ></div>
    </>
  );
};

export default Accordion;
