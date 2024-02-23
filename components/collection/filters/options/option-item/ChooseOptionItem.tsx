import FilterContext, { IFilterContext } from "context/FilterContext";
import useProperties from "hooks/useProperties";
import { useContext } from "react";
import { IChoose } from "utils/schema/filters/options.interface";
import IOptionsProperty from "utils/schema/properties/options-property.interface";

interface IProps {
  item: ReturnType<typeof useProperties>[0];
  index: number;
}

const ChooseOptionItem = ({ item, index }: IProps) => {
  const { name, property, local } = item;
  const { actions } = useContext(FilterContext) as IFilterContext;
  const chooseOptions = (property as IOptionsProperty).filters?.options
    .selection as IChoose;
  const label = local?.filter ? local.filter.fa.name : local?.global.fa.name;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        className="form-element"
        id={name}
        size={chooseOptions.size}
        onChange={(e) => actions.setChooseOption(e.target.value, index)}
        value={chooseOptions.options[chooseOptions.selected]}
      >
        {chooseOptions.options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default ChooseOptionItem;
