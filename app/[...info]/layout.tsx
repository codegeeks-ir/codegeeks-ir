import PageHeader from "components/PageHeader";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <PageHeader />
    <div className="page-header">{children}</div>
  </>
);

export default Layout;
