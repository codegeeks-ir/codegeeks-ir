import Link from "next/link";

const Authors = ({ data }) => (
  <section
    className="mt-32 flex w-full flex-row 
        flex-wrap items-center justify-start"
  >
    <h3 className="mb-4 w-full p-2 text-slate-300">نویسندگان</h3>
    {data.map((item) => (
      <section key={item.githubID} className="btn-primary rounded-b-none pb-0">
        <Link className="card-body" href={item.link}>
          <h5 className="card-title justify-center">{item.name}</h5>
        </Link>
        <section className="card-footer justify-center pb-0">
          <h6 className="card-subtitle text-center">{item.position}</h6>
        </section>
      </section>
    ))}
  </section>
);

export default Authors;
