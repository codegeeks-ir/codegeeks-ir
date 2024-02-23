import LinkSection from "components/LinkSection";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import getProvider from "utils/get-data/get-provider";
import Navigation from "utils/schema/navigation.type";
import IPage from "utils/schema/data/page.interface";
import getFileData from "utils/get-data/get-data";
import config from "utils/config/config";

const getData = async () => {
  const slugs = await getDirectorySlugs(config.source.courses);
  const courses = (await Promise.all(
    slugs.map(async (item) => await getFileData("README.md", `${config.source.courses}/${item}`))
  )) as IPage[];
  const provider = await getProvider("README.md", config.source.courses);
  return { provider, courses };
};

const Page = async () => {
  const { provider, courses } = await getData();
  return (
    <section className="collection-container">
      <section className="page-header">
        <h1>{(provider?.data as IPage).heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: provider.content }}></div>
        <LinkSection
          items={
            courses.map((course) => ({
              name: course.title,
              link: `/requirements/courses/${course.slug}`,
            })) as Navigation
          }
        />
      </section>
    </section>
  );
};

export default Page;
