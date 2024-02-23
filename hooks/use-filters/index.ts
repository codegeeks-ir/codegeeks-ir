import { DataType, Format } from "utils/schema/data";
import { useMemo, useRef } from "react";
import useFilterables from "hooks/useFilterables";
import { FilterType } from "utils/schema/filters";
import setSelectOption from "./actions/setSelectOption";
import setChooseOption from "./actions/setChooseOption";
import setCheckOption from "./actions/setCheckOption";
import applyFilter from "./actions/apply-filter";
import applySort from "./actions/applySort";
import useProperties from "hooks/useProperties";
import ISort from "utils/schema/filters/sort.interface";
import { IProperty } from "utils/schema/properties";

interface IFilters {
  input: string;
  format: Format;
  options: ReturnType<typeof useProperties>;
  rangables: ReturnType<typeof useProperties>;
  searchables: ReturnType<typeof useProperties>;
  sortables: ReturnType<typeof useProperties>;
  searchProperty: keyof DataType;
  sortProperty: keyof DataType;
  isAscending: boolean;
}

const useFilters = (format: Format) => {
  const options = useFilterables(format, FilterType.Options);
  const rangeables = useFilterables(format, FilterType.Range);
  const sortables = useFilterables(format, FilterType.Sort);
  const searchables = useFilterables(format, FilterType.Search);
  const filters = useRef<IFilters>({
    input: "",
    format: format,
    options: options,
    rangables: rangeables,
    sortables: sortables,
    searchables: searchables,
    searchProperty: searchables[0].name,
    sortProperty: sortables[0].name,
    isAscending: (sortables[0].property.filters?.sort as ISort).isAsscending,
  });
  const actions = useMemo(
    () => ({
      setInput: (newInput: string) => (filters.current.input = newInput),
      setSearchProperty: (newProperty: string) =>
        (filters.current.searchProperty = newProperty as keyof DataType),
      setSortProperty: (newProperty: string) =>
        (filters.current.sortProperty = newProperty as keyof DataType),
      setIsAscending: (isAscending: boolean) => {
        const index = filters.current.sortables.findIndex(
          (item) => item.name == filters.current.sortProperty
        );
        const sortItem = filters.current.sortables[index];
        ((sortItem.property as IProperty).filters?.sort as ISort).isAsscending =
          isAscending;
        filters.current.sortables[index] = sortItem;
        filters.current.isAscending = isAscending;
      },
      setSelectOption: (newOption: string, index: number) =>
        setSelectOption(newOption, index, filters.current),
      setChooseOption: (newOption: string, index: number) =>
        setChooseOption(newOption, index, filters.current),
      setCheckOption: (index: number) => setCheckOption(index, filters.current),
      applyFilter: (item: DataType) => applyFilter(item, filters.current),
      applySort: (item1: DataType, item2: DataType) =>
        filters.current.isAscending
          ? applySort(item1, item2, filters.current.sortProperty)
          : applySort(item2, item1, filters.current.sortProperty),
    }),
    []
  );
  return { filters: filters.current, actions };
};

export default useFilters;
export { type IFilters };
