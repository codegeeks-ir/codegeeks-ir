import { readdirSync } from "fs";
import path from "path";
import getFileData from "./get-data";
import getContent from "./get-content";
import { ContentType } from "utils/schema/provider.interface";
import { DataType } from "utils/schema/data";
import applyReference from "utils/apply-reference";

const getDataCollection = async (
  directory: string,
  isReverse: boolean = true,
): Promise<DataType[]> => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const files = readdirSync(directoryFullPath, {
    withFileTypes: true,
  }).filter((element) => element.isFile() && element.name != "README.md");
  const collection = await Promise.all(
    files.map(async (file) => {
      const data = (await getFileData(file.name, directory)) as DataType;
      return await applyReference(data);
    }),
  );
  return isReverse ? collection.reverse() : collection;
};

const getContentCollection = async (
  directory: string,
  isReverse: boolean = true,
): Promise<ContentType[]> => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const files = readdirSync(directoryFullPath, {
    withFileTypes: true,
  }).filter((element) => element.isFile() && element.name != "README.md");
  const collection = await Promise.all(
    files.map(
      async (file) => (await getContent(file.name, directory)) as ContentType,
    ),
  );
  return isReverse ? collection.reverse() : collection;
};

export { getDataCollection, getContentCollection };
