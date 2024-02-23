import { IProperty } from "utils/schema/properties";

interface IProps {
  data: string;
  field: IProperty;
}

const TimeContainer = ({ data, field }: IProps) => {
  return <>{field.isValid(data) && <span>{data}</span>}</>;
};

export default TimeContainer;
