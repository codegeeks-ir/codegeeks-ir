import FilterContext, { IFilterContext } from "context/FilterContext";
import useProperties from "hooks/useProperties";
import { useContext } from "react";
import { ISelect } from "utils/schema/filters/options.interface";
import IOptionsProperty from "utils/schema/properties/options-property.interface";

interface IProps {
  item: ReturnType<typeof useProperties>[0];
  index: number;
}

const SelectOptionItem = ({ item, index }: IProps) => {
  const { name, property, local } = item;
  const { actions } = useContext(FilterContext) as IFilterContext;
  const select = (property as IOptionsProperty).filters?.options
    .selection as ISelect;
  const label = local?.filter ? local.filter.fa.name : local?.global.fa.name;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        size={select.size}
        multiple
        onChange={(e) => actions.setSelectOption(e.target.value, index)}
      >
        {select.options.map((item) => (
          <option value={item.option}>{item.option}</option>
        ))}
      </select>
    </>
  );
};

export default SelectOptionItem;
