import { useEffect, useState } from "react";

const Tabs = ({ headers, contents }) => {
  const [showCollapse, setShowCollapse] = useState(
    Array(headers.length).fill(false)
  );
  useEffect(
    () =>
      setShowCollapse((currentShowCollapse) =>
        currentShowCollapse.map((item, index) => (index == 0 ? true : false))
      ),
    []
  );
  return (
    <>
      <div className="tab-buttons">
        {headers.map((headerItem, headerIndex) => (
          <button
            key={headerIndex}
            onClick={() =>
              setShowCollapse((currentShowCollapse) => {
                return currentShowCollapse.map((flag, flagIndex) => {
                  return flagIndex == headerIndex ? true : false;
                });
              })
            }
            className={`btn-light rounded-b-none focus:ring-0 ${
              showCollapse[headerIndex] ? "bg-slate-400" : null
            }`}
          >
            {headerItem}
          </button>
        ))}
      </div>
      {contents.map((contentItem, contentIndex) => (
        <div
          key={contentIndex}
          className={`w-full m-0 -mt-6 ${
            showCollapse[contentIndex] ? "block" : "hidden"
          }`}
        >
          {contentItem}
        </div>
      ))}
    </>
  );
};

export default Tabs;
