import { getPersianDate } from "lib/persian-long-date";

export default function ProjectItem({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{item.title}</h4>
        <h5 className="card-subtitle">امتیاز {item.score}</h5>
      </div>
      <div className="card-footer non-important">
        <p className="card-text m-0">{getPersianDate(item.startDate)}</p>
        <p className="card-text m-0">ساعت {item.startTime}</p>
      </div>
      <div className="card-button">
        <Link href={item.link}>مشاهده</Link>
      </div>
    </div>
  );
}
