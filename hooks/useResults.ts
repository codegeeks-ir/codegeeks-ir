import { useMemo, useRef } from "react";
import { DataType } from "utils/schema/data";
import { IFilterContext } from "context/FilterContext";

const useResults = (
  collection: DataType[],
  filterActions: IFilterContext["actions"]
) => {
  const results = useRef<DataType[]>(collection);
  const actions = useMemo(
    () => ({
      applyFilters: () => {
        results.current = collection
          .filter((item) => filterActions.applyFilter(item))
          .sort((item1, item2) => filterActions.applySort(item1, item2));
      },
    }),
    [filterActions]
  );
  return { results: results.current, actions };
};

export default useResults;
