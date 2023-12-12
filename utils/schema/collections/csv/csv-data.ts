import { CsvRow } from "lib/csv-to-array";
import { Format, SlugType } from "../data-type";
import { ReferenceType } from "../reference-type";
import { PropertyType } from "utils/schema/properties/property-type";

interface ICsvData {
  slug: SlugType;
  title: string;
  header: string[];
  type: PropertyType[];
  show: boolean[];
  version: string;
  description: string;
  csv: CsvRow[];
  reference?: ReferenceType;
  format: Format.Csv;
  path: string;
}

export default ICsvData;
