import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getPersianEducationYear } from "lib/persian-long-date";
import {
  getContentCollection,
  getItem,
  getPropCollection,
} from "lib/get-collection";
import Accordion from "components/Accordion";

export default function About({ propCollection, contentCollection, about }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: about.content }}></div>
      <h2>اعضای مرکزی انجمن</h2>
      {propCollection.map((item, index) => (
        <Accordion
          key={index}
          collapseData={contentCollection[index]}
          headerData={getPersianEducationYear(item.date)}
          isShowByDefault={item.membersID == propCollection[0].membersID}
        />
      ))}
    </>
  );
}

About.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const propCollection = await getPropCollection(
    "collections/members/members",
    "members"
  );
  const contentCollection = await getContentCollection(
    "collections/members/members"
  );
  const about = await getItem("about-us.md", "./");
  return {
    props: {
      propCollection,
      contentCollection,
      about,
    },
  };
}
