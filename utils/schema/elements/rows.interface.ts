import { CsvRow } from "lib/csv-to-array";
import { FieldType } from "utils/config/fields";
import { Element } from ".";

interface IRowsElement {
  type: Element.Rows;
  props: {
    description: string;
    show: boolean[];
    header: string[];
    type: FieldType[];
    rows: CsvRow[];
  };
}

export default IRowsElement;
