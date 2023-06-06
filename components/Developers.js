import Image from "next/image";
import GithubIcon from "public/icones/social/github.svg";
import StarIcon from "public/icones/star.svg";
import ForkIcon from "public/icones/fork.svg";
import PrayIcon from "public/icones/pray.svg";

const Contributor = ({ githubID }) => (
  <div className="profile-picture relative w-20 mr-4 mb-4">
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
        <div className="contributors flex flex-row flex-wrap mb-8">
          {item.githubID.map((githubID) => (
            <Contributor key={githubID} githubID={githubID} />
          ))}
        </div>
      </div>
    ))}
    <h2>دلگرمی مون باشید</h2>
    <div className="flex flex-row">
      <a
        className="btn-primary w-32 flex flex-row items-center justify-center"
        href="https://github.com/codegeeks-ir/codegeeks-ir/stargazers"
      >
        <p className="my-0 mx-1 py-0">ستاره</p>
        <StarIcon className="icon" />
      </a>
      <a
        className="btn-primary w-32 flex flex-row items-center justify-center"
        href="https://github.com/codegeeks-ir/codegeeks-ir/issues"
      >
        <p className="my-0 mx-1 py-0">کمک</p>
        <ForkIcon className="icon" />
      </a>
    </div>
    <button
      className="btn-primary w-72 flex flex-row items-center justify-center p-2
          focus:bg-green-500 focus:scale-x-105 focus:scale-105 transition ease-in-out duration-500"
      href="#"
    >
      <p className="text-xs my-0 mx-1 py-0">
        اللَهم صلی علی محمَد و آل محمَد و عجَل فرجهم
      </p>
      <PrayIcon className="icon" />
    </button>
  </div>
);

export default Developers;
