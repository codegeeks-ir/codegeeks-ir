import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import RightIcon from "public/icons/right.svg";
import LeftIcon from "public/icons/left.svg";
import { DataType } from "utils/schema/data";
import usePage from "hooks/usePage";
import ResultsContext from "context/ResultsContext";

interface IProps {
  setPaginated: Dispatch<SetStateAction<DataType[]>>;
  capacity: number;
}

const Pagination = ({ setPaginated, capacity }: IProps) => {
  const results = useContext(ResultsContext)?.results as DataType[];
  const { page, actions } = usePage(results, capacity);
  useEffect(() => actions.viewPage(1, setPaginated), [results]);
  return (
    <section className={page.count < 2 ? "hidden" : "pagination"}>
      <a
        className={page.index == 1 ? "btn-disabled" : "btn-primary"}
        onClick={() => actions.viewPage(page.index - 1, setPaginated)}
        href="#top"
      >
        <LeftIcon className="w-6 fill-slate-300" />
      </a>
      {[...Array(page.count + 1).keys()].slice(1).map((pageIndex) => (
        <a
          key={pageIndex}
          className={page.index == pageIndex ? "btn-disabled" : "btn-primary"}
          onClick={() => actions.viewPage(pageIndex, setPaginated)}
          href="#top"
        >
          {pageIndex}
        </a>
      ))}
      <a
        className={page.index == page.count ? "btn-disabled" : "btn-primary"}
        onClick={() => actions.viewPage(page.index + 1, setPaginated)}
        href="#top"
      >
        <RightIcon className="w-6 fill-slate-300" />
      </a>
    </section>
  );
};

export default Pagination;
