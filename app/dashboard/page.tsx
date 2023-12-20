import Tabs from "components/Tabs.js";
import EventForm from "components/collection/form/EventForm";
import ChallengeForm from "components/collection/form/ChallengeForm";
import ProjectForm from "components/collection/form/ProjectForm";
import BlogForm from "components/collection/form/BlogForm";
import Login from "components/Login";
import LogoType from "components/LogoType";

const Account = () => (
  <section className="mt-4 flex h-full max-h-screen w-full flex-col items-center">
    <LogoType />
    <Login />
    <Tabs
      headers={["ایجاد رویداد", "ایجاد مسابقه", "ایجاد پروژه", "ایجاد پست"]}
      contents={[
        <EventForm />,
        <ChallengeForm />,
        <ProjectForm />,
        <BlogForm />,
      ]}
    />
  </section>
);

export default Account;
