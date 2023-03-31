import PageHeader from "components/PageHeader";

export default function PageLayout({ children }) {
  return (
    <>
      <PageHeader />
      <div className="page-header">{children}</div>
    </>
  );
}
