import { Dispatch, SetStateAction, useEffect } from "react";
import RightIcon from "public/icones/right.svg";
import LeftIcon from "public/icones/left.svg";
import { IPage, ISearch } from "./Collection";
import { DataType } from "utils/schema/collections/data-type";

const getNumberOfPages = (capacity: number, collectionLength: number) =>
  collectionLength % capacity == 0
    ? collectionLength / capacity
    : Math.floor(collectionLength / capacity) + 1;

const paginate = (data: DataType[], pageIndex: number, capacity: number) => {
  if (data) {
    const paged = data.filter((item, index) => {
      let startIndex = (pageIndex - 1) * capacity;
      let endIndex = pageIndex * capacity;
      let isItemInsidePage = startIndex <= index && index < endIndex;
      if (isItemInsidePage) return true;
    });
    return paged;
  } else return [];
};

const viewPage = (
  pageIndex: number,
  search: ISearch,
  page: IPage,
  setPage: Dispatch<SetStateAction<IPage>>,
) => {
  const numberOfPages = getNumberOfPages(page.capacity, search.results.length);
  const pageResults = paginate(search.results, pageIndex, page.capacity);
  setPage({
    ...page,
    index: pageIndex,
    count: numberOfPages,
    content: pageResults,
  });
};

const Pagination = ({
  page,
  setPage,
  search,
}: {
  page: IPage;
  setPage: Dispatch<SetStateAction<IPage>>;
  search: ISearch;
}) => {
  useEffect(() => viewPage(1, search, page, setPage), [search]);
  return (
    <section className={page.count < 2 ? "hidden" : "pagination"}>
      <a
        className={page.index == 1 ? "btn-disabled" : "btn-primary"}
        onClick={() => viewPage(page.index - 1, search, page, setPage)}
        href="#top"
      >
        <LeftIcon className="w-6 fill-slate-300" />
      </a>
      {[...Array(page.count + 1).keys()].slice(1).map((pageIndex) => (
        <a
          key={pageIndex}
          className={page.index == pageIndex ? "btn-disabled" : "btn-primary"}
          onClick={() => viewPage(pageIndex, search, page, setPage)}
          href="#top"
        >
          {pageIndex}
        </a>
      ))}
      <a
        className={page.index == page.count ? "btn-disabled" : "btn-primary"}
        onClick={() => viewPage(page.index + 1, search, page, setPage)}
        href="#top"
      >
        <RightIcon className="w-6 fill-slate-300" />
      </a>
    </section>
  );
};

export default Pagination;
