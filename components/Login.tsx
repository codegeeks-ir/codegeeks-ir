import config from "data/config";
import GithubIcon from "public/icones/social/github.svg";

const Login = () => (
  <section
    className="m-0 mt-10 flex w-full 
  flex-row flex-wrap justify-center sm:w-52 md:w-64"
  >
    <a
      className="btn-green m-0 ml-0.5 flex 
        grow-0 flex-row flex-wrap justify-center rounded-l-none py-0"
      href="#"
    >
      <p className="m-0 mt-1 ml-1 py-1 text-sm">ثبت نام</p>
    </a>
    <a
      className="btn-light m-0 mr-0.5 flex 
        grow flex-row flex-wrap items-center justify-center rounded-r-none py-0"
      href={config.login}
    >
      <p className="m-0 mt-1 py-1 pl-2 text-sm">ورود با</p>
      <p className="m-0 mt-1 ml-0.5 px-0 py-1 text-sm">Github</p>
      <GithubIcon className="icon mb-0.5 fill-slate-800" />
    </a>
  </section>
);

export default Login;
