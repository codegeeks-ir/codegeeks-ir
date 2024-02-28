import Tabs from "components/Tabs.js";
import Login from "components/Login";
import LogoType from "components/LogoType";
import { Metadata } from "next";
import config from "data/config";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "داشبورد";
  const description = "صفحه کاربری همراهان انجمن";
  const url = `${config.url}/dashboard/`;
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

const Account = () => (
  <section className="mt-4 flex h-full max-h-screen w-full flex-col items-center py-36">
    <LogoType />
    <Login />
    <Tabs
      headers={["ایجاد رویداد", "ایجاد مسابقه", "ایجاد پروژه", "ایجاد پست"]}
      contents={
        [
          // <EventForm />,
          // <ChallengeForm />,
          // <ProjectForm />,
          // <BlogForm />,
        ]
      }
    />
  </section>
);

export default Account;
