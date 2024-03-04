import Tabs from "components/Tabs";
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
  <section className="main-page">
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
