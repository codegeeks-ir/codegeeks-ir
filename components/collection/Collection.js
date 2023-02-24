import Filter from "components/collection/Filter";
import Results from "components/collection/Results";
import Pagination from "components/collection/Pagination";
import { useState } from "react";

export default function propCollection({
  propCollection,
  collectionType,
  properties,
}) {
  const [mySearch, setMySearch] = useState({
    searchInput: "",
    properties: properties,
    searchProperty: properties[0].enName,
    results: propCollection,
  });

  const [myPage, setMyPage] = useState({
    currentPage: 1,
    pageCount: 0,
    pageSize: 5,
    currentPageResults: [],
  });
  return (
    <>
      <Filter
        propCollection={propCollection}
        mySearch={mySearch}
        setMySearch={setMySearch}
      />
      <Results
        currentPageResults={myPage.currentPageResults}
        collectionType={collectionType}
      />
      <Pagination myPage={myPage} setMyPage={setMyPage} mySearch={mySearch} />
    </>
  );
}
