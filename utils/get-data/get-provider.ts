import { DataType } from "utils/schema/data";
import { ProviderType, ContentType } from "utils/schema/provider.interface";
import getContent from "./get-content";
import getFileData from "./get-data";
import applyReference from "utils/apply-reference";

const getProvider = async (
  fileName: string,
  directory: string,
): Promise<ProviderType> => {
  let data = (await getFileData(fileName, directory)) as DataType;
  data = await applyReference(data);
  const content = (await getContent(fileName, directory)) as ContentType;
  return { data, content };
};

export default getProvider;
