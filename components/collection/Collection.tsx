"use client";
import Pagination from "components/collection/Pagination";
import { useMemo, useState } from "react";
import { DataType, Format } from "utils/schema/data";
import ElementFactory from "./elements";
import Filter from "./filters";
import ResultsContext from "context/ResultsContext";
import useResults from "hooks/useResults";
import useFilters from "hooks/use-filters";
import FilterContext from "context/FilterContext";
import usePage from "hooks/usePage";

interface IProps {
  format: Format;
  collection: DataType[];
}

const Collection = ({ format, collection }: IProps) => {
  const filters = useFilters(format);
  const results = useResults(collection, filters.actions);
  const paginationCapacity = useMemo(
    () => (format == Format.Companions ? 30 : 5),
    [format],
  );
  const { actions } = usePage(results.results, paginationCapacity); /// duplicate. does multiple hooks cost performance?
  const [paginate, setPaginated] = useState<DataType[]>([]);
  return (
    <FilterContext.Provider
      value={{ filters: filters.filters, actions: filters.actions }}
    >
      <ResultsContext.Provider
        value={{ results: results.results, actions: results.actions }}
      >
        <section className="w-full px-4">
          <Filter
            onApplyFilters={() => {
              results.actions.applyFilters();
              actions.viewPage(1, setPaginated);
            }}
          />
          <section className="flex flex-wrap w-full">
            {paginate.map((data) => (
              <ElementFactory data={data} key={data.slug} />
            ))}
          </section>
          <Pagination
            setPaginated={setPaginated}
            capacity={paginationCapacity}
          />
        </section>
      </ResultsContext.Provider>
    </FilterContext.Provider>
  );
};

export default Collection;
