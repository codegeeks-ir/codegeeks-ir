import Link from "next/link";
import Navigation from "utils/schema/navigation.type";

const LinkSection = ({ items }: { items: Navigation }) => (
  <ul className="sections">
    {items.map((item) => (
      <li className="section-item" key={item.link}>
        <Link className="section-link" href={item.link}>
          {item.icon}
          <span className="pt-1 text-xs">{item.name}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default LinkSection;
