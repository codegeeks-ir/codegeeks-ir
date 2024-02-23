import { IProperty } from "utils/schema/properties";

interface IProps {
  data: string;
  field: IProperty;
}

const ImageContainer = ({ data, field }: IProps) => {
  return <>{field.isValid(data) && <img src={data} />}</>;
};

export default ImageContainer;
