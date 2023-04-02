import { useEffect, useState } from "react";

export default function Tabs({ headers, contents }) {
  const [showCollapse, setShowCollapse] = useState(
    Array(headers.length).fill(false)
  );
  useEffect(
    () =>
      setShowCollapse((currentShowCollapse) => {
        return currentShowCollapse.map((item, index) => {
          return index == 0 ? true : false;
        });
      }),
    []
  );
  return (
    <>
      <div className="flex flex-row flex-wrap">
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
            className={`btn-light rounded-b-none m-0 ml-2 focus:ring-0 ${
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
          className={`m-0 -mt-6 ${
            showCollapse[contentIndex] ? "block" : "hidden"
          }`}
        >
          {contentItem}
        </div>
      ))}
    </>
  );
}
