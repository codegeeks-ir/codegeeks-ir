import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";

export default function Custom404() {
  return (
    <div>
      <h1>404</h1>
      <p>
        <strong>اینجا کجاست ؟ 🙄</strong>
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
