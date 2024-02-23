import { FilterType } from ".";

interface ISort {
  type: FilterType.Sort;
  isAsscending: boolean;
}

export default ISort;
