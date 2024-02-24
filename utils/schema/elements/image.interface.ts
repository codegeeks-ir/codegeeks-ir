import { CsvRow } from "lib/csv-to-array";
import { FieldType } from "data/fields";
import { Element } from ".";

interface IImageElement {
  type: Element.Image;
  props: {
    description: string;
    header: string[];
    type: FieldType[];
    rows: CsvRow[];
  };
}

export default IImageElement;
