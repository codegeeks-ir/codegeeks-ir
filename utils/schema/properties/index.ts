import React from "react";
import { FilterType, IFilter } from "../filters";

enum PropertyType {
  Text = "text",
  Number = "number",
  Options = "options",
  Time = "time",
  Date = "date",
  Link = "link",
  Image = "image",
}

enum MultiplicityType {
  Row = "row",
  Table = "table",
}

interface IRow {
  multiplicity: MultiplicityType.Row;
  rowSize: number;
}

interface ITable {
  multiplicity: MultiplicityType.Table;
  rowSize: number;
  columnSize: number;
}

type PrimaryTypes = Number | String | Date | Boolean;

interface IProperty {
  propertyType: PropertyType;
  isValid: (data: string) => Promise<boolean> | boolean;
  parse: (data: string) => PrimaryTypes;
  filters?: Partial<Record<FilterType, IFilter>>;
  form?: { isRequired: boolean };
  multiplicity?: IRow | ITable;
  icon?: (data: string) =>
    | {
        inContainer: React.ReactNode;
        inForm: React.ReactNode;
        inFilter: React.ReactNode;
      }
    | Promise<{
        inContainer: React.ReactNode;
        inForm: React.ReactNode;
        inFilter: React.ReactNode;
      }>;
  dataTransform?: (data: string) => string | Promise<string>;
}

export { PropertyType, type IProperty, type IRow, type ITable };
