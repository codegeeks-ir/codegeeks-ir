import IOptions from "./options.interface";
import IRange from "./range.interface";
import ISearch from "./search.interface";
import ISort from "./sort.interface";

enum FilterType {
  Search = "search",
  Range = "range",
  Options = "options",
  Sort = "sort",
}

type IFilter = IOptions | IRange | ISearch | ISort;

export { FilterType, type IFilter };
