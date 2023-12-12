import { useEffect, useState } from "react";

interface AccordionProps {
  collapseData: string;
  headerData: string;
  isShowByDefault: boolean;
}

const Accordion = ({
  collapseData,
  headerData,
  isShowByDefault,
}: AccordionProps) => {
  const [showCollapse, setShowCollapse] = useState<boolean>(false);
  useEffect(() => setShowCollapse(isShowByDefault), []);
  return (
    <section>
      <button
        onClick={() => setShowCollapse(!showCollapse)}
        className={`btn-primary mx-0 w-full text-right text-sm focus:ring-0 ${
          showCollapse ? "mt-2 rounded-b-none" : "my-0.5 mt-0 rounded-none"
        }`}
      >
        {headerData}
      </button>
      <article
        className={`m-0 -mt-8 ${showCollapse ? "block" : "hidden"}`}
        dangerouslySetInnerHTML={{ __html: collapseData }}
      ></article>
    </section>
  );
};

export default Accordion;
