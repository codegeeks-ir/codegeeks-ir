import Image from "next/image";
import GithubIcon from "public/icones/social/github.svg";
import StarIcon from "public/icones/star.svg";
import ForkIcon from "public/icones/fork.svg";

function Contributor({ githubID }) {
  const githubLink = `https://github.com/${githubID}`;
  const githubPic = githubLink + ".png";
  return (
    <div className="profile-picture relative w-20 mr-4 mb-4">
      <Image src={githubPic} alt={githubID} width={100} height={100} />
      <a className="github-icon relative" href={githubLink}>
        <GithubIcon className="icon" />
      </a>
    </div>
  );
}

export default function Developers({ contributions }) {
  return (
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
          href="https://github.com/ceituut/ceituut.github.io/stargazers"
        >
          <p className="my-0 mx-1 py-0">ستاره</p>
          <StarIcon className="icon" />
        </a>
        <a
          className="btn-primary w-32 flex flex-row items-center justify-center"
          href="https://github.com/ceituut/ceituut.github.io/issues"
        >
          <p className="my-0 mx-1 py-0">کمک</p>
          <ForkIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
