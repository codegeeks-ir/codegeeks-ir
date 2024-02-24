import metas from "data/meta";
import { DataType } from "utils/schema/data";

const applyReference = async (item: DataType): Promise<DataType> => {
  const getReference = metas[item.format].getReference;
  if (getReference) item.reference = await getReference(item);
  return item;
};

export default applyReference;
