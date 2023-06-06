import Link from "next/link";

const FaqItem = ({ item }) => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">{item.title}</h4>
      <h5 className="card-subtitle">{item.categories}</h5>
    </div>
    <div className="card-button">
      <Link href={item.link}>مشاهده</Link>
    </div>
  </div>
);

export default FaqItem;
