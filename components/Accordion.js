import { useEffect, useState } from "react";

const Accordion = ({ collapseData, headerData, isShowByDefault }) => {
  const [showCollapse, setShowCollapse] = useState(false);
  useEffect(() => setShowCollapse(isShowByDefault), []);
  return (
    <>
      <button
        onClick={() => setShowCollapse(!showCollapse)}
        className={`btn-primary text-sm text-right focus:ring-0 w-full mx-0 ${
          showCollapse ? "rounded-b-none mt-2" : "rounded-none mt-0 my-0.5"
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
