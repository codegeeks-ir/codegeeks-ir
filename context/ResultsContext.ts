import useResults from "hooks/useResults";
import { Dispatch, SetStateAction, createContext } from "react";
import { DataType } from "utils/schema/data";

interface IResultsContext {
  results: DataType[];
  actions: ReturnType<typeof useResults>["actions"];
}

const ResultsContext = createContext<IResultsContext | null>(null);

export default ResultsContext;
export { type IResultsContext };
