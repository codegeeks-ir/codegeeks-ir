import { CsvRow } from "lib/csv-to-array";
import { FieldType } from "utils/config/fields";
import { Element } from ".";

interface ITableElement {
  type: Element.Table;
  props: {
    description: string;
    header: string[];
    type: FieldType[];
    rows: CsvRow[];
  };
}

export default ITableElement;
