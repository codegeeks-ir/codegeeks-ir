import LinkSection from "components/LinkSection";
import config from "data/config";
import requirementsNavItem from "data/navigation/requirements-navigation";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "نیازمندی‌ها";
  const description =
    "ارتباط با اساتید، چارت درسی گروه کامپیوتر، مستندات درسی رشته، ساعت حرکت سرویس ها و ...";
  const url = `${config.url}/requirements/`;
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
    <LinkSection items={requirementsNavItem} />
  </section>
);

export default Page;
