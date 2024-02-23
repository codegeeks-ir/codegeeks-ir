import FilterIcon from "public/icones/filter.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { ISearch } from "./Collection";
import { DataType } from "utils/schema/collections/data-type";
import { getSearchables } from "utils/schema/collections/meta-type";

const filterSearch = (
  collection: DataType[],
  searchProperty: keyof DataType,
  search: string,
) => {
  if (collection) {
    const resultsByProperty = collection.filter((item: DataType) => {
      let isFound = item[searchProperty]
        .toLowerCase()
        .includes(search.toLowerCase());
      if (isFound) return true;
    });
    return resultsByProperty;
  } else return [];
};

const FilterOptions = ({
  collection,
  search,
  setSearch,
  show,
}: {
  collection: DataType[];
  search: ISearch;
  setSearch: Dispatch<SetStateAction<ISearch>>;
  show: boolean;
}) => (
  <section
    className={`flex grow flex-row flex-wrap items-center 
    ${show ? "visible" : "invisible"}`}
  >
    <input
      type="search"
      placeholder="جستجو"
      className="form-element"
      onChange={(e) =>
        setSearch({
          ...search,
          input: e.target.value,
          results: filterSearch(
            collection,
            search.searchProperty,
            e.target.value,
          ),
        })
      }
    />
    <section className="flex grow flex-row flex-wrap items-center">
      {getSearchables(collection[0].format).map((property) => {
        return (
          <button
            className={`mx-0.5 grow md:grow-0 ${
              search.searchProperty == property ? "btn-primary" : "btn-light"
            }`}
            onClick={() => setSearch({ ...search, searchProperty: property })}
            key={property}
          >
            {search.meta[property].localName}
          </button>
        );
      })}
    </section>
  </section>
);

const Filter = ({
  collection,
  search,
  setSearch,
}: {
  collection: DataType[];
  search: ISearch;
  setSearch: Dispatch<SetStateAction<ISearch>>;
}) => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <section
      className="card mt-0 flex w-full flex-col items-start
            justify-start rounded-t-none py-3 px-2 sm:px-2 md:px-4 lg:px-5"
    >
      <section className="flex w-full flex-row flex-wrap md:flex-row-reverse">
        <FilterOptions
          collection={collection}
          search={search}
          setSearch={setSearch}
          show={show}
        />
        <button
          className="btn-primary flex h-9 w-full items-center justify-center md:w-9"
          onClick={() => setShow(!show)}
        >
          <FilterIcon className="w-6 fill-slate-300" />
        </button>
      </section>
    </section>
  );
};

export default Filter;
