import Image from "next/image";
import Link from "next/link";

export default function PostAuthor({ name, githubID }) {
  return (
    <div className="flex flex-row flex-wrap justify-end items-center pl-0 pb-2">
      <Link
        className="btn-light w-auto flex flex-row items-center 
            rounded-tl-none py-1 mt-1 mb-0 ml-0 mr-4"
        href={`companions/${githubID}`}
      >
        <div className="profile-picture relative w-8 my-0 py-0">
          <Image
            src={`https://github.com/${githubID}.png`}
            width="100"
            height="100"
            alt={githubID}
          />
        </div>
        <p className="text-base text-gray-700 py-0 my-0">{name}</p>
      </Link>
    </div>
  );
}
