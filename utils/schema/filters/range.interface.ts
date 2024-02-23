import { FilterType } from ".";

interface IRange {
  type: FilterType.Range;
  min: number;
  max: number;
}

export default IRange;
