import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";

export default function Custom500() {
  return (
    <div>
      <h1>500</h1>
      <p>
        <strong>مشکل از ماست</strong>
      </p>
    </div>
  );
}

Custom500.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};
