import { useEffect, useState } from "react";

const Accordion = ({ collapseData, headerData, isShowByDefault }) => {
  const [showCollapse, setShowCollapse] = useState(false);
  useEffect(() => setShowCollapse(isShowByDefault), []);
  return (
    <>
      <button
        onClick={() => setShowCollapse(!showCollapse)}
        className={`btn-primary mx-0 w-full text-right text-sm focus:ring-0 ${
          showCollapse ? "mt-2 rounded-b-none" : "my-0.5 mt-0 rounded-none"
        }`}
      >
        {headerData}
      </button>
      <div
        className={`m-0 -mt-8 ${showCollapse ? "block" : "hidden"}`}
        dangerouslySetInnerHTML={{ __html: collapseData.content }}
      ></div>
    </>
  );
};

export default Accordion;
