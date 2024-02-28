import LinkSection from "components/LinkSection";
import config from "data/config";
import requirementsNavItem from "data/navigation/requirements-navigation";
import sideNavItems from "data/navigation/side-navigation";
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
  <section className="mt-4 flex h-full max-h-screen w-full flex-col items-center py-36">
    <section className="grow-1 my-4 flex h-full w-full flex-col items-center justify-evenly">
      <section className="h-auto w-full">
        <LinkSection items={requirementsNavItem} />
        <LinkSection items={sideNavItems} />
      </section>
    </section>
  </section>
);

export default Page;
