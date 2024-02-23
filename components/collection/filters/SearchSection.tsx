import { useContext } from "react";
import SearchIcon from "public/icones/search.svg";
import FilterContext, { IFilterContext } from "context/FilterContext";
import DropDown from "components/DropDown";
import { DataType } from "utils/schema/data";

const SearchSection = () => {
  const { filters, actions } = useContext(FilterContext) as IFilterContext;
  return (
    <section className="flex flex-row grow items-start w-full">
      <DropDown
        values={filters.searchables.map(
          (item) => item.local?.global.fa.name as string,
        )}
        keys={filters.searchables.map((item) => item.name as string)}
        label={<SearchIcon className="w-6 fill-slate-500" />}
        onSelect={(option: string) =>
          actions.setSearchProperty(option as keyof DataType)
        }
        defaultOption={filters.searchProperty}
      />
      <input
        type="search"
        className="btn-light mt-0 mx-0 text-right grow 
          rounded-r-none rounded-b-none"
        onChange={(e) => actions.setInput(e.target.value)}
      />
    </section>
  );
};

export default SearchSection;
