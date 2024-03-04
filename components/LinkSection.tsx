import Link from "next/link";
import Navigation from "utils/schema/navigation.type";

interface IProps {
  items: Navigation;
}

const LinkSection = ({ items }: IProps) => {
  return (
    <ul className="sections animate__animated animate__fadeInUp animate__faster">
      {items.map((item, index) => (
        <li key={item.link}>
          <Link
            className={`section-link ${
              item.repo ? "btn-light" : "btn-primary"
            }`}
            href={item.link}
            target={item.repo == undefined ? "_blank" : ""}
          >
            {item.icon}
            <span className="pt-2">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkSection;
