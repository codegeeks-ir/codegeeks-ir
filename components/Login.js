import GithubIcon from "public/icones/social/github.svg";

export default function Login({}) {
  return (
    <div className="flex flex-row flex-wrap justify-center m-0 mt-20">
      <a
        className="btn-green flex flex-row flex-wrap 
        justify-center w-20 py-0 m-0 ml-0.5 rounded-l-none"
        href="#"
      >
        <p className="text-sm m-0 mt-1 ml-1 py-1">ثبت نام</p>
      </a>
      <a
        className="btn-light flex flex-row flex-wrap 
        justify-center items-center w-36 py-0 m-0 mr-0.5 rounded-r-none"
        href="#"
      >
        <p className="text-sm m-0 mt-1 pl-2 py-1">ورود با</p>
        <p className="text-sm m-0 mt-1 ml-0.5 px-0 py-1">Github</p>
        <GithubIcon className="icon fill-gray-800 mb-0.5" />
      </a>
    </div>
  );
}
