import LinkSection from "components/LinkSection";
import collectionsNavItems from "utils/config/navigation/collections-navigation";

const Page = () => (
  <section className="mt-4 flex h-full max-h-screen w-full flex-col items-center">
    <section
      className="grow-1 my-4 flex h-full w-full 
      flex-col items-center justify-evenly"
    >
      <section className="h-auto w-full">
        <LinkSection items={collectionsNavItems} />
      </section>
    </section>
  </section>
);

export default Page;
