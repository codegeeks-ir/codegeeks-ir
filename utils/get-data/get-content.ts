import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import { ContentType } from "utils/schema/collections/item-type";

export const getContent = async (fileName: string, directory: string) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileFullPath = path.join(directoryFullPath, fileName);
  const fileContent = fs.readFileSync(fileFullPath, "utf8");
  if (fileName.endsWith(".md")) return await getMarkdownContent(fileContent);
  else if (fileName.endsWith(".csv")) return await getCsvContent(fileContent);
};

const getMarkdownContent = async (
  fileContent: string,
): Promise<ContentType> => {
  const matterResult = matter(fileContent);
  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content);
  let contentHtml = processedContent.toString();
  contentHtml = contentHtml ? contentHtml : "";
  return contentHtml;
};

const getCsvContent = async (fileContent: string): Promise<ContentType> => {
  const allDataRows = fileContent.split("\n");
  let csvString: string = allDataRows
    .filter((row) => !row.startsWith("#"))
    .join("\n");
  csvString = csvString ? csvString : "";
  return csvString;
};

export default getContent;
