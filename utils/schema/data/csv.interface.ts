import { CsvRow } from "lib/csv-to-array";
import { FieldType } from "utils/config/fields";
import { Format } from ".";
import SlugType from "utils/schema/slug.type";
import { Element } from "../elements";

interface ICsv {
  slug: SlugType;
  title: string;
  header: string[];
  type: FieldType[];
  show: boolean[];
  version: string;
  description: string;
  rows: CsvRow[];
  element: Element;
  format: Format.Csv;
  path: string;
}

export default ICsv;
