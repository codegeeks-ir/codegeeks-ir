import RangeItem from "./RangeItem";
import { useContext } from "react";
import FilterContext, { IFilterContext } from "context/FilterContext";

const RangesSection = () => {
  const { filters } = useContext(FilterContext) as IFilterContext;
  return (
    <section className="flex grow flex-row flex-wrap items-center">
      {filters.rangables.map((item, index) => (
        <RangeItem
          name={item.name}
          property={item.property}
          local={item.local}
          index={index}
          key={item.name}
        />
      ))}
    </section>
  );
};

export default RangesSection;
