import { CsvRow } from "lib/csv-to-array";
import { FieldType } from "utils/config/fields";
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
