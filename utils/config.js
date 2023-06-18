const config = {
  title: "کامپیوتر صنعتی ارومیه",
  email: "info@codegeeks.ir",
  url: "https://codegeeks.ir",
  login:
    process.env.NODE_ENV == "development"
      ? "https://codegeeks.ir/login-test"
      : "https://codegeeks.ir/login",
  github: "codegeeks-ir",
};

export default config;
