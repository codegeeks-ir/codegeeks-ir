import PageHeader from "components/PageHeader";

const PageLayout = ({ children }) => (
  <>
    <PageHeader />
    <div className="page-header">{children}</div>
  </>
);

export default PageLayout;
