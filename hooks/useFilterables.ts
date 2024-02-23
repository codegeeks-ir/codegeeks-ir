import { Format } from "utils/schema/data";
import { FilterType } from "utils/schema/filters";
import { useMemo } from "react";
import useProperties from "./useProperties";

const useFilterables = (format: Format, type: FilterType) => {
  const properties = useProperties(format);
  return useMemo(
    () =>
      properties.filter((item) =>
        item?.property.filters ? item?.property.filters[type] : false
      ),
    [format, type]
  );
};

export default useFilterables;
