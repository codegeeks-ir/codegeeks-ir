import Link from "next/link";
import { linkProperties } from "utils/config";

const LinkSection = ({ category }) => {
  return (
    <ul className="sections">
      {linkProperties
        .filter((item) => item.category == category)
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
