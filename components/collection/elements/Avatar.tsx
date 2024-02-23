import Image from "next/image";
import GithubIcon from "public/icones/social/github.svg";
import CodegeeksIcon from "public/icones/codegeeks/codegeeks-icon.svg";
import IAvatarElement from "utils/schema/elements/avatar.interface";

const Avatar = ({
  github,
  imageSource,
  link,
  isCompanion,
}: IAvatarElement["props"]) => (
  <section
    className="flex flex-col items-center justify-center 
   m-1 rounded-md border border-solid border-slate-400"
  >
    <div className="profile-picture relative w-20">
      <Image
        src={imageSource}
        alt={github}
        width={100}
        height={100}
        className="p-1"
      />
    </div>
    <a
      className="btn-primary flex-row
    flex-wrap items-center justify-center
    border-t border-x-0 border-b-0 border-solid border-slate-400
    rounded-t-none m-0 mt-1 p-1 flex w-full"
      href={link}
    >
      {isCompanion ? (
        <CodegeeksIcon className="h-auto w-10 fill-slate-600" />
      ) : (
        <GithubIcon className="h-auto w-6 fill-slate-600" />
      )}
    </a>
  </section>
);

export default Avatar;
