import PageHeader from "components/PageHeader";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <PageHeader />
    <section className="page-header">{children}</section>
  </>
);

export default Layout;
