import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export function getSlugs(directory) {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(directoryFullPath);
  const slugs = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
  return slugs;
}

export async function getItem(fileName, directory) {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileFullPath = path.join(directoryFullPath, fileName);
  const fileContents = fs.readFileSync(fileFullPath, "utf8");
  if (fileName.endsWith(".md"))
    return await getMarkdownItem(fileContents, fileName);
  else if (fileName.endsWith(".csv"))
    return await getCsvItem(fileContents, fileName);
}

async function getMarkdownItem(fileContents, fileName) {
  const slug = fileName.replace(/\.md$/, "");
  const matterResult = matter(fileContents);
  const frontMatterData = matterResult.data;
  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return { slug, content: contentHtml, ...frontMatterData };
}

async function getCsvItem(fileContents, fileName) {
  const slug = fileName.replace(/\.csv$/, "");
  const allDataRows = fileContents.split("\n");
  const csvString = allDataRows
    .filter((row) => !row.startsWith("#"))
    .join("\n");
  const comments = allDataRows
    .filter((row) => row.startsWith("#"))
    .map((comment) => comment.replace("#", ""));
  return { slug, content: csvString, comments };
}

export async function getPropCollection(directory, outputPageDirectory = null) {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(directoryFullPath);
  const collection = await Promise.all(
    fileNames.map(async (fileName) => {
      const item = await getItem(fileName, directory);
      const { content, ...props } = item;
      if (outputPageDirectory != null) {
        const link = `/${outputPageDirectory}/${item.slug}`;
        return { ...props, link };
      } else return { ...props };
    })
  );
  return collection.reverse();
}

export async function getContentCollection(directory) {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(directoryFullPath);
  const collection = await Promise.all(
    fileNames.map(async (fileName) => {
      const item = await getItem(fileName, directory);
      const { content, ...props } = item;
      return { content };
    })
  );
  return collection.reverse();
}
