import FileExplorer from "components/FileExplorer";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getDirectorySlugs, getItem } from "lib/get-collection";

export default function CoursePage({ data, repoName, resources }) {
  const organizationLink = "https://github.com/ceituut";
  const repoLink = `${organizationLink}/${repoName}`;
  const download = `${repoLink}/archive/refs/heads/main.zip`;
  return (
    <div>
      <article dangerouslySetInnerHTML={{ __html: data.content }}></article>
      <h4>منبع</h4>
      <p>
        شما می تونید منابع رو به صورت تکی یا یکجا دریافت و حتی برای بهبودش
        مشارکت کنید.
      </p>
      <a className="btn-primary" href={download}>
        دریافت کل منبع
      </a>
      <a className="btn-primary" href={repoLink}>
        مشارکت
      </a>
      <div className="h-auto p-2 mt-8" dir="ltr">
        <h5 className="file-explorer-header">File Explorer</h5>
        <FileExplorer resources={resources} repoName={repoName} />
      </div>
    </div>
  );
}

CoursePage.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>;
    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getItem(
    "README.md",
    `collections/courses/${params.slug}`
  );
  const repoName = params.slug;
  const resources = require(`../../collections/courses/${params.slug}/assets/tree.json`);
  return {
    props: {
      data,
      repoName,
      resources
    },
  };
}

export async function getStaticPaths() {
  const paths = await getDirectorySlugs("collections/courses");
  return { paths, fallback: false };
}

// fetch("assets/tree.json")
//   .then((response) => response.json())
//   .then((json) => {
//     const treeData = JSON.parse(JSON.stringify(json));
//     const array = Array.from(treeData);
//     FileExplorer(array, container);
//   });
