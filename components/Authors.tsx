import Link from "next/link";

const Authors = ({ propCollection }) => (
  <div
    className="mt-32 flex w-full flex-row 
        flex-wrap items-center justify-start"
  >
    <h3 className="mb-4 w-full p-2 text-slate-300">نویسندگان</h3>
    {propCollection.map((item) => (
      <div key={item.githubID} className="btn-primary rounded-b-none pb-0">
        <Link className="card-body" href={item.link}>
          <h5 className="card-title justify-center">{item.name}</h5>
        </Link>
        <div className="card-footer justify-center pb-0">
          <h6 className="card-subtitle text-center">{item.position}</h6>
        </div>
      </div>
    ))}
  </div>
);

export default Authors;
