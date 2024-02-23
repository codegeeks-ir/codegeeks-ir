import { IProperty, PropertyType } from "utils/schema/properties";
import TextContainer from "./TextContainer";
import TimeContainer from "./TimeContainer";
import LinkContainer from "./LinkContainer";
import NumberContainer from "./NumberContainer";
import OptionsContainer from "./OptionsContainer";
import DateContainer from "./DateContainer";
import ImageContainer from "./ImageContainer";

interface IProps {
  data: string;
  field: IProperty;
}

const ContainerFactory = ({ data, field }: IProps) => {
  const containers: Record<PropertyType, React.ReactNode> = {
    [PropertyType.Text]: <TextContainer data={data} field={field} />,
    [PropertyType.Number]: <NumberContainer data={data} field={field} />,
    [PropertyType.Options]: <OptionsContainer data={data} field={field} />,
    [PropertyType.Time]: <TimeContainer data={data} field={field} />,
    [PropertyType.Date]: <DateContainer data={data} field={field} />,
    [PropertyType.Link]: <LinkContainer data={data} field={field} />,
    [PropertyType.Image]: <ImageContainer data={data} field={field} />,
  };
  return containers[field.propertyType];
};

export default ContainerFactory;
