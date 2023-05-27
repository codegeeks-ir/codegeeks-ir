import Link from "next/link";

const LinkSection = ({ items }) => {
  return (
    <ul className="sections">
      {items
        .map((item) => (
          <li className="section-item" key={item.path}>
            <Link className="section-link" href={item.path}>
              {item.icon}
              <span className="text-xs pt-1">{item.name}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default LinkSection;
