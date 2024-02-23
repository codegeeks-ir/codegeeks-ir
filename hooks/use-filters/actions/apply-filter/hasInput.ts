import { DataType } from "utils/schema/data";

const hasInput = (item: DataType, input: string, property: keyof DataType) =>
  item[property].toString().toLowerCase().includes(input.toLowerCase());

export default hasInput;
