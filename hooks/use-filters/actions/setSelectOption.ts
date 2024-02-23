import { IFilters } from "..";
import IOptionsProperty from "utils/schema/properties/options-property.interface";
import { ISelect } from "utils/schema/filters/options.interface";
import useProperties from "hooks/useProperties";

const setSelectOption = (
  newOption: string,
  index: number,
  filters: IFilters
) => {
  const { name, property, local } = filters.options[index];
  const select = (property as IOptionsProperty).filters?.options
    .selection as ISelect;
  const selectedIndex = select.options.findIndex(
    (item) => item.option == newOption
  );
  select.options[selectedIndex].isSelected =
    !select.options[selectedIndex].isSelected;
  (property as IOptionsProperty).filters.options.selection = select;
  filters.options[index] = { name, property, local } as ReturnType<
    typeof useProperties
  >[0];
};

export default setSelectOption;
