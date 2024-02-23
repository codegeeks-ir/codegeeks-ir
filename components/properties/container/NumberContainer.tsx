import { IProperty } from "utils/schema/properties";

interface IProps {
  data: string;
  field: IProperty;
}

const NumberContainer = ({ data, field }: IProps) => {
  return <>{field.isValid(data) && <span>{data}</span>}</>;
};

export default NumberContainer;
