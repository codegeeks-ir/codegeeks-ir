import { IFilters } from "../..";
import hasInput from "./hasInput";
import hasRanges from "./hasRanges";
import { DataType } from "utils/schema/data";
import hasOptions from "./hasOptions";

const applyFilter = (item: DataType, filters: IFilters) => {
  return hasInput(item, filters.input, filters.searchProperty) 
  // && hasRanges(item, filters.rangables);
// &&hasOptions(item, filters.options)
}
export default applyFilter;
