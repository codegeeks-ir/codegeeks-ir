import Link from "next/link";

const LinkSection = ({ items }) => (
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
