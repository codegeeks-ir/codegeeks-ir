import FilterIcon from "public/icones/filter.svg";
import { useMemo, useRef, useState } from "react";

const filterSearch = (propCollection, searchProperty, search) => {
  if (propCollection) {
    const resultsByProperty = propCollection.filter((item) => {
      let isFound = item[searchProperty]
        .toLowerCase()
        .includes(search.toLowerCase());
      if (isFound) return true;
    });
    return resultsByProperty;
  } else return [];
};

const FilterOptions = ({
  propCollection,
  mySearch,
  setMySearch,
  showFilters,
}) => (
  <div
    className={`flex flex-row flex-wrap items-center grow 
    ${showFilters ? "visible" : "invisible"}`}
  >
    <input
      type="search"
      placeholder="جستجو"
      className="form-element"
      onChange={(e) =>
        setMySearch({
          ...mySearch,
          searchInput: e.target.value,
          results: filterSearch(
            propCollection,
            mySearch.searchProperty,
            e.target.value
          ),
        })
      }
    />
    <div className="flex flex-row flex-wrap items-center grow">
      {mySearch.properties.map((property) => {
        if (property.searchable)
          return (
            <button
              className={`mx-0.5 grow md:grow-0 ${
                mySearch.searchProperty == property.enName
                  ? "btn-primary"
                  : "btn-light"
              }`}
              onClick={() =>
                setMySearch({ ...mySearch, searchProperty: property.enName })
              }
              key={property.enName}
            >
              {property.faName}
            </button>
          );
      })}
    </div>
  </div>
);

const Filter = ({ propCollection, mySearch, setMySearch }) => {
  const [showFilters, setShowFilters] = useState(true);
  return (
    <div
      className="card flex flex-col w-full justify-start items-start
            rounded-t-none mt-0 py-3 px-2 lg:px-5 md:px-4 sm:px-2"
    >
      <div className="flex flex-row md:flex-row-reverse flex-wrap w-full">
        <FilterOptions
          propCollection={propCollection}
          mySearch={mySearch}
          setMySearch={setMySearch}
          showFilters={showFilters}
        />
        <button
          className="btn-primary flex w-full md:w-9 h-9 items-center justify-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FilterIcon className="fill-slate-300 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
