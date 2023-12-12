import fs from "fs";
import { readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const getFileSlugs = (directory) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const slugs = readdirSync(directoryFullPath, { withFileTypes: true })
    .filter((element) => element.isFile())
    .map((file) => {
      return {
        params: {
          slug: file.name.replace(/\.md$/, ""),
        },
      };
    });
  return slugs;
};

const getItem = async (fileName, directory) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileFullPath = path.join(directoryFullPath, fileName);
  const fileContents = fs.readFileSync(fileFullPath, "utf8");
  if (fileName.endsWith(".md"))
    return await getMarkdownItem(fileContents, fileName);
  else if (fileName.endsWith(".csv"))
    return await getCsvItem(fileContents, fileName);
};

const getMarkdownItem = async (fileContents, fileName) => {
  const slug = fileName.replace(/\.md$/, "");
  const matterResult = matter(fileContents);
  const frontMatterData = matterResult.data;
  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return { slug, content: contentHtml, ...frontMatterData };
};

const getCsvItem = async (fileContents, fileName) => {
  const slug = fileName.replace(/\.csv$/, "");
  const allDataRows = fileContents.split("\n");
  const csvString = allDataRows
    .filter((row) => !row.startsWith("#"))
    .join("\n");
  const comments = allDataRows
    .filter((row) => row.startsWith("#"))
    .map((comment) => comment.replace("#", ""));
  return { slug, content: csvString, comments };
};

const getPropCollection = async (
  directory,
  outputPageDirectory = null,
  isReverse = true
) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const files = readdirSync(directoryFullPath, {
    withFileTypes: true,
  }).filter((element) => element.isFile());
  const collection = await Promise.all(
    files.map(async (file) => {
      const item = await getItem(file.name, directory);
      const { content, ...props } = item;
      if (outputPageDirectory != null) {
        const link = `/${outputPageDirectory}/${item.slug}`;
        return { ...props, link };
      } else return { ...props };
    })
  );
  if (isReverse) return collection.reverse();
  else return collection;
};

const getContentCollection = async (directory, isReverse = true) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const files = readdirSync(directoryFullPath, {
    withFileTypes: true,
  }).filter((element) => element.isFile());
  const collection = await Promise.all(
    files.map(async (file) => {
      const item = await getItem(file.name, directory);
      const { content, ...props } = item;
      return { content };
    })
  );
  if (isReverse) return collection.reverse();
  else return collection;
};

const getDirectorySlugs = async (directory) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const slugs = readdirSync(directoryFullPath, { withFileTypes: true })
    .filter((element) => element.isDirectory() && !element.name.startsWith("."))
    .map((directoryElement) => {
      return {
        params: {
          slug: directoryElement.name,
        },
      };
    });
  return slugs;
};

export {
  getFileSlugs,
  getItem,
  getPropCollection,
  getContentCollection,
  getDirectorySlugs,
};
