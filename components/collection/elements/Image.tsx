import Link from "next/link";
import MoreIcon from "public/icons/more.svg";
import ICardElement from "utils/schema/elements/card.interface";

const Image = ({
  title,
  subtitle,
  excerpt,
  footerRightData,
  footerLeftData,
  link,
  isHot,
}: ICardElement["props"]) => (
  <section className={`card ${isHot && "bg-sky-500"}`}>
    <h4 className="card-title">{title}</h4>
    <section className="card-body">
      <h5 className={`card-subtitle ${isHot && "text-slate-300"}`}>
        {subtitle}
      </h5>
      {excerpt.split(/\r\n|\r|\n/).map((phrase, index) => (
        <p className="card-excerpt" key={index}>
          {phrase}
        </p>
      ))}
    </section>
    <section className="card-footer">
      <p className="absolute right-0 top-0 mr-2 text-xs md:text-sm">
        {footerRightData}
      </p>
      <Link className="btn-primary m-0 py-0 rounded-b-none" href={link}>
        <MoreIcon className="fill-slate-300 w-6" />
      </Link>
      <p className="absolute left-0 top-0 ml-2 text-xs md:text-sm">
        {footerLeftData}
      </p>
    </section>
  </section>
);

export default Image;
