type Config = {
  title: string;
  email: string;
  name: string;
  url: string;
  login: string;
  github: string;
  repository: string;
};

const config: Config = {
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
};

export default config;
