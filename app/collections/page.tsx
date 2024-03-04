import LinkSection from "components/LinkSection";
import config from "data/config";
import collectionsNavItems from "data/navigation/collections-navigation";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "مجموعه‌ها";
  const description = "رویدادها، مسابقات، انتشارات، سوالات‌متداول";
  const url = `${config.url}/collections/`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
    },
  };
};

const Page = () => (
  <section className="main-page">
    <LinkSection items={collectionsNavItems} />
  </section>
);

export default Page;
