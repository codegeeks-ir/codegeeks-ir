import FilterContext, { IFilterContext } from "context/FilterContext";
import { useContext } from "react";
import { DataType } from "utils/schema/data";
import IRange from "utils/schema/filters/range.interface";
import { ILocal } from "utils/schema/localization.type";
import { IProperty } from "utils/schema/properties";

interface IProps {
  name: keyof DataType;
  property: IProperty;
  local: ILocal | undefined;
  index: number;
}

const RangeItem = ({ name, property, local, index }: IProps) => {
  const { filters, actions } = useContext(FilterContext) as IFilterContext;
  const label = local?.filter ? local.filter.fa.name : local?.global.fa.name;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="range"
        min={(property.filters?.range as IRange).min}
        max={(property.filters?.range as IRange).max}
        className="form-element"
      />
    </>
  );
};

export default RangeItem;
