import FilterIcon from "public/icons/filter.svg";
import { useContext, useState } from "react";
import OptionsSection from "./options/OptionsSection";
import RangesSection from "./range/RangesSection";
import SearchSection from "./SearchSection";
import SortSection from "./SortSection";
import FilterContext, { IFilterContext } from "context/FilterContext";
import CloseIcon from "public/icons/close.svg";
import ApplyIcon from "public/icons/apply.svg";

interface IProps {
  onApplyFilters: () => void;
}

const Filter = ({ onApplyFilters }: IProps) => {
  const [show, setShow] = useState<boolean>(false);
  const { filters, actions } = useContext(FilterContext) as IFilterContext;
  return (
    <section
      className="card border-none mt-0 
      flex w-full flex-col items-start
        justify-start rounded-t-none py-3"
    >
      <button
        className="btn-light m-0 flex h-9 w-full items-center justify-center md:w-9"
        onClick={() => {
          actions.setInput("");
          setShow(!show);
        }}
      >
        <FilterIcon className="w-6 fill-slate-600" />
      </button>
      {show && (
        <section
          className="flex items-start justify-center 
        flex-wrap fixed right-0 top-0 z-10
        bg-slate-300 w-full h-full md:mr-24"
        >
          <section className="page-header-navbar">
            <button
              className="page-header-navbar-button"
              onClick={() => setShow(!show)}
            >
              <CloseIcon className="w-6 fill-slate-600" />
            </button>
          </section>
          <section className="flex flex-col flex-wrap w-64">
            {filters.searchables.length > 0 && <SearchSection />}
            {/* {filters.options.length > 0 && <OptionsSection />} */}
            {/* {filters.rangables.length > 0 && <RangesSection />} */}
            {filters.sortables.length > 0 && <SortSection />}
            <button
              className="btn-primary flex h-9 w-full mx-0 items-center justify-center"
              onClick={() => {
                onApplyFilters();
                setShow(!show);
              }}
            >
              <ApplyIcon className="w-6 fill-slate-600" />
            </button>
          </section>
        </section>
      )}
    </section>
  );
};

export default Filter;
