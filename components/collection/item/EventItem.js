import { getPersianLongDate } from "lib/persian-long-date";
import Link from "next/link";

const EventItem = ({ item }) => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">{item.title}</h4>
      <h5 className="card-subtitle">{item.lecturer}</h5>
    </div>
    <div className="card-footer non-important">
      <p className="card-text m-0">{getPersianLongDate(item.date)}</p>
      <p className="card-text m-0">ساعت {item.date.split(" ")[1]}</p>
    </div>
    <div className="card-button">
      <Link href={item.link}>مشاهده</Link>
    </div>
  </div>
);

export default EventItem;
