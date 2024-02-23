import FilterContext, { IFilterContext } from "context/FilterContext";
import useProperties from "hooks/useProperties";
import { useContext } from "react";
import { ICheck } from "utils/schema/filters/options.interface";
import IOptionsProperty from "utils/schema/properties/options-property.interface";

interface IProps {
  item: ReturnType<typeof useProperties>[0];
  index: number;
}

const CheckOptionItem = ({ item, index }: IProps) => {
  const { name, property, local } = item;
  const { actions } = useContext(FilterContext) as IFilterContext;
  const checkOption = (property as IOptionsProperty).filters?.options
    .selection as ICheck;
  const label = local?.filter ? local.filter.fa.name : local?.global.fa.name;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        id={name}
        value={checkOption.option}
        checked={checkOption.isSelected}
        onChange={(e) => actions.setCheckOption(index)}
      />
    </>
  );
};

export default CheckOptionItem;
