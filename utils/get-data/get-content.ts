import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import gfm from "remark-gfm";
import { ContentType } from "utils/schema/collections/view-type";

export const getContent = async (fileName: string, directory: string) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileFullPath = path.join(directoryFullPath, fileName);
  const fileContent = fs.readFileSync(fileFullPath, "utf8");
  if (fileName.endsWith(".md")) return await getMarkdownContent(fileContent);
  else if (fileName.endsWith(".csv")) return await getCsvContent(fileContent);
};

const getMarkdownContent = async (
  fileContent: string
): Promise<ContentType> => {
  const matterResult = matter(fileContent);
  const processedContent = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkRehype)
    .use(rehypeStringify)
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
