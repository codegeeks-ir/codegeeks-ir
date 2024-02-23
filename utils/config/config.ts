interface IProps {
  title: string;
  email: string;
  name: string;
  url: string;
  login: string;
  github: string;
  repository: string;
  source: {
    collections: string;
    info: string;
    courses: string;
  };
}

const config: IProps = {
  title: "انجمن کامپیوتر دانشگاه صنعتی ارومیه",
  email: "info@codegeeks.ir",
  name: "codegeeks",
  url: "https://codegeeks.ir",
  login:
    process.env.NODE_ENV == "development"
      ? "https://codegeeks.ir/login-test"
      : "https://codegeeks.ir/login",
  github: "codegeeks-ir",
  repository: "codegeeks-ir",
  source: {
    collections: "docs/collections",
    info: "docs/info",
    courses: "courses",
  },
};

export default config;
