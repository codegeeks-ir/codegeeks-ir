import Link from "next/link";
import MoreIcon from "public/icones/more.svg";

const Item = ({ title, subtitle, footerRightData, footerLeftData, link }) => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <h5 className="card-subtitle">{subtitle}</h5>
    </div>
    <div className="card-footer">
      <p className="absolute right-0 top-0 mr-2 text-xs md:text-sm">{footerRightData}</p>
      <Link className="btn-primary m-0 py-0 rounded-b-none" href={link}>
        <MoreIcon className="fill-slate-300 w-6" />
      </Link>
      <p className="absolute left-0 top-0 ml-2 text-xs md:text-sm">{footerLeftData}</p>
    </div>
  </div>
);

export default Item;
