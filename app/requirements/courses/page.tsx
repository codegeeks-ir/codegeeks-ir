import PageHeader from "components/PageHeader";
import courseNavItems from "utils/navigation/course-nav-items";
import LinkSection from "components/LinkSection";
import { getItem } from "lib/get-collection";

const CoursesPage = ({ data }) => (
  <div className="collection-container">
    <PageHeader />
    <div className="page-header">
      <h1>{data.heading}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      <LinkSection items={courseNavItems} />
    </div>
  </div>
);

export const getStaticProps = async () => {
  const data = await getItem("courses.md", "docs/pages/requirements");
  return {
    props: {
      data,
    },
  };
};

export default CoursesPage;
