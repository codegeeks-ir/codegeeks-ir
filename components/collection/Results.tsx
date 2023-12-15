import { DataType } from "utils/schema/collections/data-type";
import { ReferenceType } from "utils/schema/collections/reference-type";
import { ElementFactory } from "utils/schema/collections/element-type";

interface IProps {
  results: DataType[];
  reference?: ReferenceType;
}
const Results = ({ results, reference }: IProps) =>
  results.map((data) => <ElementFactory data={data} reference={reference} />);

export default Results;
