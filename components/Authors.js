import Link from "next/link";

export default function Authors({ propCollection }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-start 
        items-center w-full mt-32"
    >
      <h3 className="w-full text-slate-300 p-2 mb-4">نویسندگان</h3>
      {propCollection.map((item) => (
        <div key={item.githubID} className="btn-primary rounded-b-none pb-0">
          <Link className="card-body" href={item.link}>
            <h5 className="card-title justify-center">{item.name}</h5>
          </Link>
          <div className="card-footer pb-0 justify-center">
            <h6 className="card-subtitle text-center">{item.position}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
// key={item.githubID}
// className="btn-primary rounded-b-none pb-0"
// style="max-width: 220px;"
