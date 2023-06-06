import Link from "next/link";

const LinkSection = ({ items }) => (
  <ul className="sections">
    {items.map((item) => (
      <li className="section-item" key={item.link}>
        <Link className="section-link" href={item.link}>
          {item.icon}
          <span className="text-xs pt-1">{item.name}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default LinkSection;
