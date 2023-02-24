import FilterIcon from "public/icones/filter.svg";
import { useMemo, useRef, useState } from "react";

function filterSearch(propCollection, searchProperty, search) {
  if (propCollection) {
    const resultsByProperty = propCollection.filter((item) => {
      let isFound = item[searchProperty]
        .toLowerCase()
        .includes(search.toLowerCase());
      if (isFound) return true;
    });
    return resultsByProperty;
  } else return [];
}

function FilterOptions({ propCollection, mySearch, setMySearch }) {
  // function preventDefaultSearch(event) {
  //   if (event.key == "/") event.preventDefault();
  // }

  // function changeSearchProperty(newProperty) {
  //   searchProperty.current = newProperty;
  // }

  // onKeyDown={[
  //   (e) => this.preventDefaultSearch(e),
  //   search.current.focus(),
  // ]}
  return (
    <div className="flex flex-row flex-wrap">
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
      <div className="flex flex-row flex-wrap">
        {mySearch.properties.map((property) => {
          if (property.searchable)
            return (
              <button
                className={`mx-0.5 ${
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
}

export default function Filter({ propCollection, mySearch, setMySearch }) {
  const [showFilters, setShowFilters] = useState(true);
  return (
    <div
      className="card flex flex-col w-full justify-start items-start
            rounded-t-none mt-0 py-3 px-2 lg:px-5 md:px-4 sm:px-2"
    >
      <div className="flex flex-row flex-wrap w-full">
        <button
          className="btn-primary"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FilterIcon className="icon" />
        </button>
        {showFilters ? (
          <FilterOptions
            propCollection={propCollection}
            mySearch={mySearch}
            setMySearch={setMySearch}
          />
        ) : null}
      </div>
    </div>
  );
}
