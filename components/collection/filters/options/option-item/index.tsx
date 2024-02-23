import IOptions, { OptionsType } from "utils/schema/filters/options.interface";
import CheckOptionItem from "./CheckOptionItem";
import SelectOptionItem from "./SelectOptionItem";
import ChooseOptionItem from "./ChooseOptionItem";
import useProperties from "hooks/useProperties";

interface IProps {
  item: ReturnType<typeof useProperties>[0];
  index: number;
}

const OptionFactory = ({ item, index }: IProps) => {
  const type = (item.property.filters?.options as IOptions).selection.type;
  const options: Record<OptionsType, React.ReactNode> = {
    [OptionsType.Check]: <CheckOptionItem item={item} index={index} />,
    [OptionsType.Choose]: <ChooseOptionItem item={item} index={index} />,
    [OptionsType.Select]: <SelectOptionItem item={item} index={index} />,
  };
  return options[type];
};

export default OptionFactory;
