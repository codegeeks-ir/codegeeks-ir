import { useMemo } from "react";
import { Format } from "utils/schema/data";
import useProperties from "./useProperties";

const useFormables = (format: Format) => {
  const properties = useProperties(format); 
  return useMemo(
    () => properties.filter((item) => item.property?.form),
    [format]
  );
}

export default useFormables;
