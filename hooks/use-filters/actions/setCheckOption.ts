import { IFilters } from "..";
import IOptionsProperty from "utils/schema/properties/options-property.interface";
import { ICheck } from "utils/schema/filters/options.interface";
import useProperties from "hooks/useProperties";

const setCheckOption = (index: number, filters: IFilters) => {
  const { name, property, local } = filters.options[index];
  const checkOption = (property as IOptionsProperty).filters?.options
    .selection as ICheck;
  checkOption.isSelected = !checkOption.isSelected;
  (property as IOptionsProperty).filters.options.selection = checkOption;
  filters.options[index] = { name, property, local } as ReturnType<
    typeof useProperties
  >[0];
};

export default setCheckOption;
