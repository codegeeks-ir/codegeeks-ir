import { CsvRow } from "lib/csv-to-array";
import { FieldType } from "data/fields";
import { Element } from ".";

interface ISectionElement {
  type: Element.Section;
  props: {
    description: string;
    header: string[];
    type: FieldType[];
    rows: CsvRow[];
  };
}

export default ISectionElement;
