import metas from "utils/config/meta";
import { DataType } from "utils/schema/data";

const parseData = (data: DataType) =>
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      const field = metas[data.format].properties[key as keyof DataType];
      const hasParseMethod = field != undefined && field.parse != undefined;
      const newValue = hasParseMethod ? field.parse(value) : value;
      return [key, newValue];
    }),
  ) as DataType;

export default parseData;
