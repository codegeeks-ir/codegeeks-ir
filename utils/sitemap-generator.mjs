import fs from "fs";
import { readdirSync } from "fs";
import path from "path";

const getSlugs = async (directory) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(directoryFullPath);
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return slugs;
};

const getDirectorySlugs = async (directory) => {
  const directoryFullPath = path.join(process.cwd(), directory);
  const slugs = readdirSync(directoryFullPath, { withFileTypes: true })
    .filter((element) => element.isDirectory())
    .map((directoryElement) => directoryElement.name);
  return slugs;
};

const getPaths = async () => {
  const blogPaths = await getSlugs("collections/blog/posts").then((slugs) =>
    slugs.map((slug) => `blog/${slug}`)
  );
  const challengesPaths = await getSlugs(
    "collections/challenges/challenges"
  ).then((slugs) => slugs.map((slug) => `challenges/${slug}`));
  const companionsPaths = await getSlugs("collections/companions/bios").then(
    (slugs) => slugs.map((slug) => `companions/${slug}`)
  );
  const coursePaths = await getDirectorySlugs("collections/courses").then(
    (slugs) => slugs.map((slug) => `requirements/courses/${slug}`)
  );
  const eventsPaths = await getSlugs("collections/events/events").then(
    (slugs) => slugs.map((slug) => `events/${slug}`)
  );
  const faqsPaths = await getSlugs("collections/faqs/faqs").then((slugs) =>
    slugs.map((slug) => `faqs/${slug}`)
  );
  const membersPaths = await getSlugs("collections/members/members").then(
    (slugs) => slugs.map((slug) => `members/${slug}`)
  );
  const otherPaths = [
    "about",
    "blog",
    "challenges",
    "events",
    "faqs",
    "projects",
    "requirements",
    "requirements/contacts",
    "requirements/curriculum-guide",
    "requirements/courses",
    "sponsor",
  ];
  return [
    blogPaths,
    eventsPaths,
    challengesPaths,
    companionsPaths,
    coursePaths,
    faqsPaths,
    membersPaths,
    otherPaths,
  ];
};

const getLocation = async (pathCollection, mainUrl) =>
  pathCollection
    .map(
      (path) => `
    <url>
        <loc>${`${mainUrl}/${path}`}</loc>
    </url>`
    )
    .join("");

const getSiteMapContent = async () => {
  const mainUrl = "https://codegeeks.ir";
  const allPathCollections = await getPaths();
  const allLocations = await Promise.all(
    allPathCollections.map(
      async (pathCollection) => await getLocation(pathCollection, mainUrl)
    )
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
       <loc>${mainUrl}</loc>
    </url>${allLocations.join("")}
    </urlset>
      `;
};

const generateSiteMap = async () => {
  const content = await getSiteMapContent();
  fs.writeFile("public/sitemap.xml", content, function (err) {
    if (err) return console.log(err);
    console.log("sitemap.xml generated !");
  });
};

generateSiteMap();
