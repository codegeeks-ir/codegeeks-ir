"use client";
import Filter from "components/collection/Filter";
import Pagination from "components/collection/Pagination";
import { useState } from "react";
import { DataType } from "utils/schema/collections/data-type";
import {
  MetaType,
  getSearchables,
  metaFactory,
} from "utils/schema/collections/meta-type";
import { ElementFactory } from "utils/schema/collections/element-type";

interface ICollectionProps {
  collection: DataType[];
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

const Collection = ({ collection }: ICollectionProps) => {
  const [search, setSearch] = useState<ISearch>({
    input: "",
    meta: metaFactory(collection[0].format),
    searchProperty: getSearchables(collection[0].format)[0],
    results: collection,
  });

  const [page, setPage] = useState<IPage>({
    index: 1,
    count: 0,
    capacity: 5,
    content: [],
  });
  return (
    <>
      <Filter collection={collection} search={search} setSearch={setSearch} />
      {page.content.map((data) => (
        <ElementFactory data={data} />
      ))}
      <Pagination page={page} setPage={setPage} search={search} />
    </>
  );
};

export default Collection;

export { type ISearch, type IPage };
