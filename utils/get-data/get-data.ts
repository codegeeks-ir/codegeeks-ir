import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  getComments,
  getSpecificMetaData,
  csvToArrayOfObjects,
  csvConfig,
} from "lib/csv-to-array";
import ICsvData from "../schema/collections/csv/csv-data";
import { DataType, Format } from "../schema/collections/data-type";
import { PropertyType } from "utils/schema/properties/property-type";

export const getFileData = async (fileName: string, directory: string) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileFullPath = path.join(directoryFullPath, fileName);
  const fileContent = fs.readFileSync(fileFullPath, "utf8");
  if (fileName.endsWith(".md"))
    return await getMarkdownData(fileContent, fileName, directory);
  else if (fileName.endsWith(".csv"))
    return await getCsvData(fileContent, fileName, directory);
};

const getMarkdownData = async (
  fileContent: string,
  fileName: string,
  directory: string,
): Promise<DataType> => {
  const matterResult = matter(fileContent);
  const data = matterResult.data as DataType;
  data.slug ? data.slug : fileName.replace(/\.md$/, "");
  data.path = `${directory}/${fileName}`;
  return data;
};

const getCsvData = async (
  fileContent: string,
  fileName: string,
  directory: string,
): Promise<DataType> => {
  const slug = fileName.replace(/\.csv$/, "");
  const comments = getComments(fileContent);
  const title = getSpecificMetaData(comments, "#title").join(
    csvConfig.fieldDelimiter,
  );
  const header = getSpecificMetaData(comments, "#header");
  const type = getSpecificMetaData(comments, "#type").map(
    (item) => item as PropertyType,
  );
  const show = getSpecificMetaData(comments, "#show").map((item) =>
    item === "true" ? true : false,
  );
  const version = getSpecificMetaData(comments, "#version").join(
    csvConfig.fieldDelimiter,
  );
  const description = getSpecificMetaData(comments, "#description").join(
    csvConfig.fieldDelimiter,
  );
  const data: ICsvData = {
    slug,
    title,
    header,
    type,
    show,
    version,
    description,
    list: csvToArrayOfObjects(fileContent),
    format: Format.Csv,
    path: `${directory}/${fileName}`,
  };
  return data;
};

export default getFileData;
