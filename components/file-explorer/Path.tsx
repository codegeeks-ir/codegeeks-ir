const Path = ({ path }: { path: string }) => (
  <section className="mt-1 flex grow flex-wrap pl-2">
    {path.length > 24 ? (
      <span className="text-sm">../{path.split("/").pop()}</span>
    ) : (
      <>
        {path.split("/").map((item, index) => (
          <span className="text-sm" key={index}>
            {item}/
          </span>
        ))}
      </>
    )}
  </section>
);

export default Path;
