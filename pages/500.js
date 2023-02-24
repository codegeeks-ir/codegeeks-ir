import PageLayout from "layouts/PageLayout";

export default function Custom404() {
  return (
    <div>
      <h1>500</h1>
      <p>
        <strong>مشکل از ماست</strong>
      </p>
    </div>
  );
}

Custom404.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};
