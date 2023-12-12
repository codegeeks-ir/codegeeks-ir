"use client";
import { ReactNode, useEffect, useState } from "react";

interface ITabsProps {
  headers: string[];
  contents: string[] | ReactNode[];
}

const Tabs = ({ headers, contents }: ITabsProps) => {
  const [showCollapse, setShowCollapse] = useState<boolean[]>(
    Array(headers.length).fill(false),
  );
  useEffect(
    () =>
      setShowCollapse((currentShowCollapse) =>
        currentShowCollapse.map((item, index) => (index == 0 ? true : false)),
      ),
    [],
  );
  return (
    <>
      <div className="tab-buttons">
        {headers.map((headerItem, headerIndex: number) => (
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
              showCollapse[headerIndex] && "bg-slate-400"
            }`}
          >
            {headerItem}
          </button>
        ))}
      </div>
      {contents?.map((contentItem, contentIndex: number) => (
        <div
          key={contentIndex}
          className={`m-0 -mt-6 w-full ${
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
