import metas from "utils/config/meta";
import { useMemo } from "react";
import { DataType, Format } from "utils/schema/data";
import useLocalization from "./useLocalization";
import { IProperty } from "utils/schema/properties";

const useProperties = (format: Format) => {
  const properties = metas[format].properties;
  const localization = useLocalization(format);
  return useMemo(
    () =>
      Object.entries(properties).map((item, index) => ({
        name: item[0] as keyof DataType,
        property: item[1] as IProperty,
        local: localization.find((element) => element.name == item[0])?.local,
        index
      })),
    [format]
  );
};

export default useProperties;
