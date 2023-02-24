import { getPersianDate } from "lib/persian-long-date";
import Link from "next/link";

export default function PostItem({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{item.title}</h4>
        <h5 className="card-subtitle">{item.categories}</h5>
        {/* <p className="card-text">{item.excerpt}</p> */}
      </div>
      <div className="card-footer non-important justify-end" dir="ltr">
        <p className="m-0">{getPersianDate(item.date)}</p>
      </div>
      <div className="card-button">
        <Link href={item.link}>مطالعه</Link>
      </div>
    </div>
  );
}
