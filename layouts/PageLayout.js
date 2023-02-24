import PageHeader from "components/PageHeader";

export default function PageLayout({ children }) {
  return (
    <div className="w-full">
      <PageHeader />
      <div className="page-header">{children}</div>
    </div>
  );
}
