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
  <section className="mt-4 flex h-full max-h-screen w-full flex-col items-center py-36">
    <section
      className="grow-1 my-4 flex h-full w-full 
      flex-col items-center justify-evenly"
    >
      <section className="h-auto w-full">
        <LinkSection items={collectionsNavItems} />
      </section>
    </section>
  </section>
);

export default Page;
