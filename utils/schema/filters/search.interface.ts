import { FilterType } from ".";

interface ISearch {
  type: FilterType.Search;
  priority: number;
}

export default ISearch;
