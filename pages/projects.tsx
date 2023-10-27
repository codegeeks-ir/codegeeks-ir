import {
  getContentCollection,
  getItem,
  getPropCollection,
} from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import Head from "next/head";
import PageLayout from "layouts/PageLayout";
import TableFromArray from "components/TableFromArray";
import csvToArrayOfObjects from "lib/csv-to-array";

const Projects = ({
  projectPropCollection,
  projectContentCollection,
  data,
}) => (
  <>
    <Head>
      <meta name="description" content={data.description} />
      <title>{data.title}</title>
      <meta property="og:title" content={data.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={data.image} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={data.url} />
    </Head>
    <h1>{data.heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
    <div>
      {projectPropCollection.map((item, index) => (
        <TableFromArray
          array={projectContentCollection[index]}
          comments={item.comments}
          key={index}
        />
      ))}
    </div>
  </>
);

Projects.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async () => {
  const projectPropCollection = await getPropCollection("docs/data/projects/");
  let projectContentCollection = await getContentCollection(
    "docs/data/projects/"
  );
  projectContentCollection = projectContentCollection.map((item) =>
    csvToArrayOfObjects(item.content)
  );
  const data = await getItem("projects.md", "docs/pages");
  return {
    props: {
      projectPropCollection,
      projectContentCollection,
      data,
    },
  };
};

export default Projects;
