import SortAscendingIcon from "public/icons/sort-ascending.svg";
import SortDescendingIcon from "public/icons/sort-descending.svg";
import FilterContext, { IFilterContext } from "context/FilterContext";
import { useContext, useState } from "react";
import DropDown from "components/DropDown";

const SortSection = () => {
  const { filters, actions } = useContext(FilterContext) as IFilterContext;
  const [isAscending, setIsAscending] = useState(filters.isAscending);
  return (
    <section className="flex grow flex-row items-center w-full">
      <DropDown
        values={filters.sortables.map(
          (item) => item.local?.global.fa.name as string
        )}
        keys={filters.sortables.map((item) => item.name as string)}
        label={"مرتب سازی"}
        onSelect={(option: string) => actions.setSortProperty(option)}
        defaultOption={filters.sortProperty}
      />
      <button
        className="btn-light flex h-9 w-full items-center justify-center md:w-9
        mx-0 rounded-r-none rounded-b-none"
        onClick={() => {
          actions.setIsAscending(!filters.isAscending);
          setIsAscending(!isAscending);
        }}
      >
        {isAscending ? (
          <SortAscendingIcon className="w-6 fill-slate-600" />
        ) : (
          <SortDescendingIcon className="w-6 fill-slate-600" />
        )}
      </button>
    </section>
  );
};

export default SortSection;
