import useProperties from "hooks/useProperties";
import { DataType } from "utils/schema/data";
import IOptions, {
  ICheck,
  IChoose,
  ISelect,
  OptionsType,
} from "utils/schema/filters/options.interface";

const hasOptions = (
  item: DataType,
  options: ReturnType<typeof useProperties>
) =>
  options.length > 0
    ? options
        .map((optionItem) => {
          const option = optionItem.property.filters?.options as IOptions;
          switch (option.selection.type) {
            case OptionsType.Check:
              return (
                (option.selection as ICheck).isSelected ==
                Boolean(item[optionItem.name])
              );
            case OptionsType.Choose: {
              const selectedIndex = (option.selection as IChoose).selected;
              const selected = (option.selection as IChoose).options[
                selectedIndex
              ] as string;
              return selected == item[optionItem.name];
            }
            case OptionsType.Select: {
              const selectedOptions = (option.selection as ISelect).options
                .filter((selectOptionItem) => selectOptionItem.isSelected)
                .map((selectOptionItem) => selectOptionItem.option);
              return selectedOptions.includes(item[optionItem.name]);
            }
          }
        })
        .reduce((previouse, current) => previouse && current)
    : true;

export default hasOptions;
