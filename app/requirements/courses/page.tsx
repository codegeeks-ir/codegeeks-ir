import PageHeader from "components/PageHeader";
import LinkSection from "components/LinkSection";
import { getDirectorySlugs } from "utils/get-data/get-slugs";
import getFileData from "utils/get-data/get-data";
import IPageData from "utils/schema/collections/page/page-data";
import { getProvider } from "utils/schema/collections/view-type";
import Navigation from "utils/schema/navigation/navigation-type";

const getData = async () => {
  const slugs = await getDirectorySlugs("courses");
  const courses = (await Promise.all(
    slugs.map(async (item) => await getFileData("README.md", `courses/${item}`))
  )) as IPageData[];
  const provider = await getProvider("README.md", "courses");
  return { provider, courses };
};

const Page = async () => {
  const { provider, courses } = await getData();
  return (
    <section className="collection-container">
      <PageHeader />
      <section className="page-header">
        <h1>{(provider?.data as IPageData).heading}</h1>
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
