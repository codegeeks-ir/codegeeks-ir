import localizations from "utils/config/localization";
import { useMemo } from "react";
import { DataType, Format } from "utils/schema/data";

const useLocalization = (format: Format) =>
  useMemo(
    () =>
      Object.entries(localizations[format]).map((item) => ({
        name: item[0] as keyof DataType,
        local: item[1],
      })),
    [format]
  );

export default useLocalization;
