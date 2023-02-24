import { useEffect } from "react";

function getNumberOfPages(pageSize, collectionLength) {
  if (collectionLength % pageSize == 0) return collectionLength / pageSize;
  else return Math.floor(collectionLength / pageSize) + 1;
}

function paginate(propCollection, currentPage, pageSize) {
  if (propCollection) {
    const paged = propCollection.filter((item, index) => {
      let startIndex = (currentPage - 1) * pageSize;
      let endIndex = currentPage * pageSize;
      let isItemInsidePage = startIndex <= index && index < endIndex;
      if (isItemInsidePage) return true;
    });
    return paged;
  } else return [];
}

function viewPage(pageIndex, mySearch, myPage, setMyPage) {
  const numberOfPages = getNumberOfPages(
    myPage.pageSize,
    mySearch.results.length
  );
  const pageResults = paginate(mySearch.results, pageIndex, myPage.pageSize);
  setMyPage({
    ...myPage,
    currentPage: pageIndex,
    pageCount: numberOfPages,
    currentPageResults: pageResults,
  });
}

export default function Pagination({ myPage, setMyPage, mySearch }) {
  useEffect(() => viewPage(1, mySearch, myPage, setMyPage), [mySearch]);
  return (
    <>
      <div
        className={
          (myPage.pageCount == 0) | (myPage.pageCount == 1)
            ? "hidden"
            : "pagination"
        }
      >
        <a
          className={myPage.currentPage == 1 ? "btn-disabled" : "btn-primary"}
          onClick={() =>
            viewPage(myPage.currentPage - 1, mySearch, myPage, setMyPage)
          }
          href="#top"
        >
          صفحه قبل
        </a>
        {[...Array(myPage.pageCount + 1).keys()].slice(1).map((pageIndex) => (
          <a
            key={pageIndex}
            className={
              myPage.currentPage == pageIndex ? "btn-disabled" : "btn-primary"
            }
            onClick={() => viewPage(pageIndex, mySearch, myPage, setMyPage)}
            href="#top"
          >
            {pageIndex}
          </a>
        ))}
        <a
          className={
            myPage.currentPage == myPage.pageCount
              ? "btn-disabled"
              : "btn-primary"
          }
          onClick={() =>
            viewPage(myPage.currentPage + 1, mySearch, myPage, setMyPage)
          }
          href="#top"
        >
          صفحه بعد
        </a>
      </div>
    </>
  );
}
