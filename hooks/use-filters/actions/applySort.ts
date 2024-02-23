import { DataType } from "utils/schema/data";

const applySort = (
  item1: DataType,
  item2: DataType,
  sortProperty: keyof DataType
) => {
  const propertyType = Object.prototype.toString
    .call(item1[sortProperty])
    .slice(8, -1)
    .toLowerCase();
  switch (propertyType) {
    case "number":
      return (
        Number.parseFloat(item2[sortProperty]) -
        Number.parseFloat(item1[sortProperty])
      );
    case "date":
      return (
        new Date(item1[sortProperty].toString()).getTime() -
        new Date(item2[sortProperty].toString()).getTime()
      );
    case "string":
    default:
      return item1[sortProperty].localeCompare(item2[sortProperty]);
  }
};

export default applySort;
