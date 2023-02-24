import Link from "next/link";

export default function Courses({ propCollection }) {
  return (
    <div className="flex flex-col my-16">
      {propCollection.map((course) => (
        <Link
          key={course.repo}
          className="btn-light w-1/2 sm:w-48 md:w-48"
          href={course.link}
        >
          {course.name}
        </Link>
      ))}
    </div>
  );
}
// course propCollection data is not ready to use
