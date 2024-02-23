import { IProperty, PropertyType } from "utils/schema/properties";
import TextForm from "./TextForm";
import { ILocal } from "utils/schema/localization.type";

interface IProps {
  field: IProperty;
  local: ILocal;
}

const FormFactory = ({ field, local }: IProps) => {
  const forms: Record<PropertyType, React.ReactNode> = {
    [PropertyType.Text]: <TextForm field={field} local={local} />,
    [PropertyType.Number]: undefined,
    [PropertyType.Options]: undefined,
    [PropertyType.Time]: undefined,
    [PropertyType.Date]: undefined,
    [PropertyType.Link]: undefined,
    [PropertyType.Image]: undefined,
  };
  return forms[field.propertyType];
};

export default FormFactory;
