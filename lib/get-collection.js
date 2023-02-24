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

export function getPropCollection(directory, outputPageDirectory) {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(directoryFullPath);
  const collection = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const link = `/${outputPageDirectory}/${slug}`;
    const fileFullPath = path.join(directoryFullPath, fileName);
    const fileContents = fs.readFileSync(fileFullPath, "utf8");
    const matterResult = matter(fileContents);
    const frontMatterData = matterResult.data;
    return { slug, link, ...frontMatterData };
  });
  return collection.reverse();
}

export async function getContentCollection(directory, outputPageDirectory) {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(directoryFullPath);
  const collection = await Promise.all(
    fileNames.map(async (fileName) => {
      const fileFullPath = path.join(directoryFullPath, fileName);
      const fileContents = fs.readFileSync(fileFullPath, "utf8");
      const matterResult = matter(fileContents);
      const processedContent = await remark()
        .use(gfm)
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();
      return { contentHtml };
    })
  );
  return collection.reverse();
}

export async function getItem(slug, directory) {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileFullPath = path.join(directoryFullPath, `${slug}.md`);
  const fileContents = fs.readFileSync(fileFullPath, "utf8");
  const matterResult = matter(fileContents);
  const frontMatterData = matterResult.data;
  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return { slug, contentHtml, ...frontMatterData };
}
