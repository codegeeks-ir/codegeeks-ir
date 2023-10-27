import Image from "next/image";
import GithubIcon from "public/icones/social/github.svg";
import StarIcon from "public/icones/star.svg";
import ForkIcon from "public/icones/fork.svg";
import PrayIcon from "public/icones/pray.svg";

const Contributor = ({ githubID }) => (
  <div className="profile-picture relative mr-4 mb-4 w-20">
    <Image
      src={`https://github.com/${githubID}.png`}
      alt={githubID}
      width={100}
      height={100}
    />
    <a className="github-icon relative" href={`https://github.com/${githubID}`}>
      <GithubIcon className="icon" />
    </a>
  </div>
);

const Developers = ({ contributions }) => (
  <div className="my-16">
    <h2>توسعه دهندگان</h2>
    {contributions.map((item) => (
      <div key={item.section}>
        <h5>{item.section}</h5>
        <div className="contributors mb-8 flex flex-row flex-wrap">
          {item.githubID.map((githubID) => (
            <Contributor key={githubID} githubID={githubID} />
          ))}
        </div>
      </div>
    ))}
    <h2>دلگرمی مون باشید</h2>
    <div className="flex flex-row">
      <a
        className="btn-primary flex w-32 flex-row items-center justify-center"
        href="https://github.com/codegeeks-ir/codegeeks-ir/stargazers"
      >
        <p className="my-0 mx-1 py-0">ستاره</p>
        <StarIcon className="icon" />
      </a>
      <a
        className="btn-primary flex w-32 flex-row items-center justify-center"
        href="https://github.com/codegeeks-ir/codegeeks-ir/issues"
      >
        <p className="my-0 mx-1 py-0">کمک</p>
        <ForkIcon className="icon" />
      </a>
    </div>
    <button
      className="btn-primary flex w-72 flex-row items-center justify-center p-2
          transition duration-500 ease-in-out focus:scale-105 focus:scale-x-105 focus:bg-green-500"
      href="#"
    >
      <p className="my-0 mx-1 py-0 text-xs">
        اللَهم صلی علی محمَد و آل محمَد و عجَل فرجهم
      </p>
      <PrayIcon className="icon" />
    </button>
  </div>
);

export default Developers;
