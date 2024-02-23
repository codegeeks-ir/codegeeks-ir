import useProperties from "hooks/useProperties";
import { DataType } from "utils/schema/data";
import IRange from "utils/schema/filters/range.interface";

const hasRanges = (
  item: DataType,
  rangables: ReturnType<typeof useProperties>
) =>
  rangables.length > 0
    ? rangables
        .map((rangeItem) => {
          const min = (rangeItem.property.filters?.range as IRange).min;
          const max = (rangeItem.property.filters?.range as IRange).max;
          const propertyType = Object.prototype.toString
          .call(item[rangeItem.name])
          .slice(8, -1)
          .toLowerCase();
        switch (propertyType) {
          case "number":
            return (
              min <= Number.parseFloat(item[rangeItem.name]) &&
              Number.parseFloat(item[rangeItem.name]) <= max
            );
          case "date":
            return (
              min <= new Date(item[rangeItem.name].toString()).getTime() && 
              new Date(item[rangeItem.name].toString()).getTime() <= max
            );
          case "string":
          default:
            return false;
        }
        })
        .reduce((previouse, current) => previouse && current)
    : true;

export default hasRanges;
