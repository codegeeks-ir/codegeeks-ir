"use client";
import Filter from "components/collection/Filter";
import Results from "components/collection/Results";
import Pagination from "components/collection/Pagination";
import { useState } from "react";
import { DataType } from "utils/schema/collections/data-type";
import {
  MetaType,
  getSearchables,
  metaFactory,
} from "utils/schema/collections/meta-type";

interface ICollectionProps {
  data: DataType[];
}

interface ISearch {
  input: string;
  meta: MetaType;
  searchProperty: keyof DataType;
  results: DataType[];
}

interface IPage {
  index: number;
  count: number;
  capacity: number;
  content: DataType[];
}

const Collection = ({ data }: ICollectionProps) => {
  const [search, setSearch] = useState<ISearch>({
    input: "",
    meta: metaFactory(data[0].format),
    searchProperty: getSearchables(data[0].format)[0],
    results: data,
  });

  const [page, setPage] = useState<IPage>({
    index: 1,
    count: 0,
    capacity: 5,
    content: [],
  });
  return (
    <>
      <Filter data={data} search={search} setSearch={setSearch} />
      <Results results={page.content} />
      <Pagination page={page} setPage={setPage} search={search} />
    </>
  );
};

export default Collection;

export { type ISearch, type IPage };
