import { MetadataRoute } from "next";
import config from "utils/config";
import { getFileSlugs, getDirectorySlugs } from "utils/get-data/get-slugs";
import { Format, SlugType } from "utils/schema/collections/data-type";

type Url = MetadataRoute.Sitemap[0];

const getItemUrl = (item: SlugType, format: Format): Url => {
  switch (format) {
    case Format.Blog:
      return {
        url: `${config.url}/${format}/${item}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      } as Url;
    case Format.Challenges:
      return {
        url: `${config.url}/${format}/${item}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      } as Url;
    case Format.Page:
      return {
        url: `${config.url}/${format}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      } as Url;
    case Format.Companions:
      return {
        url: `${config.url}/${format}/${item}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      } as Url;
    case Format.Csv:
      return {
        url: `${config.url}/${format}/${item}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      } as Url;
    case Format.Events:
      return {
        url: `${config.url}/${format}/${item}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      } as Url;
    case Format.Faqs:
      return {
        url: `${config.url}/${format}/${item}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      } as Url;
  }
};

const getCollectionPaths = async () => {
  const collections = await getFileSlugs("docs/pages/collections");
  const items = collections.map(
    async (collection: SlugType) =>
      await getFileSlugs(`docs/collections/${collection}`)
  );
  return [...items, collections];
};

const getPaths = async (): Promise<MetadataRoute.Sitemap> => {
  // const collections = (await getCollectionPaths()).map(item => getItemUrl(item, item.));
  const coursePaths: MetadataRoute.Sitemap = await getDirectorySlugs(
    "courses"
  ).then((slugs) =>
    slugs.map((slug) => ({
      url: `${config.url}/requirements/courses/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }))
  );
  return [
    {
      url: config.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${config.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${config.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${config.url}/challenges`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${config.url}/events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${config.url}/faqs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${config.url}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${config.url}/sponsor`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${config.url}/requirements`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${config.url}/requirements/contacts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${config.url}/requirements/curriculum-guide`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${config.url}/requirements/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    // ...collectionPaths,
    ...coursePaths,
  ];
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return await getPaths();
};

export default sitemap;
