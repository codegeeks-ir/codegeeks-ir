import { IFilters } from "..";
import IOptionsProperty from "utils/schema/properties/options-property.interface";
import { IChoose } from "utils/schema/filters/options.interface";
import useProperties from "hooks/useProperties";

const setChooseOption = (
  newOption: string,
  index: number,
  filters: IFilters
) => {
  const { name, property, local } = filters.options[index];
  const chooseOptions = (property as IOptionsProperty).filters?.options
    .selection as IChoose;
  const selectedIndex = chooseOptions.options.findIndex(
    (item) => item == newOption
  );
  chooseOptions.options[selectedIndex] = property.parse(newOption) as string;
  (property as IOptionsProperty).filters.options.selection = chooseOptions;
  filters.options[index] = { name, property, local } as ReturnType<
    typeof useProperties
  >[0];
};

export default setChooseOption;
