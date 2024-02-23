import OptionFactory from "./option-item";
import { useContext } from "react";
import FilterContext, { IFilterContext } from "context/FilterContext";

const OptionsSection = () => {
  const { filters } = useContext(FilterContext) as IFilterContext;
  return (
    <section className="flex grow flex-row flex-wrap items-center">
      {filters.options.map((item, index) => (
        <OptionFactory item={item} index={index} key={item.name} />
      ))}
    </section>
  );
};

export default OptionsSection;
