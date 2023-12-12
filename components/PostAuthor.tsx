import Image from "next/image";
import Link from "next/link";

const PostAuthor = ({ name, githubID }: { name: string; githubID: string }) => (
  <div className="flex flex-row flex-wrap items-center justify-end pl-0 pb-2">
    <Link
      className="btn-light mt-1 mb-0 ml-0 mr-4 
            flex w-auto flex-row items-center rounded-tl-none py-1"
      href={`../companions/${githubID}`}
    >
      <div className="profile-picture relative my-0 w-8 py-0">
        <Image
          src={`https://github.com/${githubID}.png`}
          width="100"
          height="100"
          alt={githubID}
        />
      </div>
      <p className="my-0 py-0 text-base text-slate-700">{name}</p>
    </Link>
  </div>
);

export default PostAuthor;
