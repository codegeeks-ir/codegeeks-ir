import useFilters, { IFilters } from "hooks/use-filters";
import { createContext } from "react";

interface IFilterContext {
  filters: IFilters;
  actions: ReturnType<typeof useFilters>["actions"];
}

const FilterContext = createContext<IFilterContext | null>(null);

export default FilterContext;
export { type IFilterContext };
