import config from "utils/config";
import { Octokit } from "@octokit/core";
import { getUserOperation, getMembershipOperation } from "./requests.js";

const getCode = () => {
  let code = localStorage.getItem("code");
  if (code == "" || code == null || code == undefined) {
    code = new URL(location.href).searchParams.get("code");
    localStorage.setItem("code", code.toString());
  }
  return code;
};

const getToken = async () => {
  const path =
    location.pathname +
    location.search.replace(/\b(code|state)=\w+/g, "").replace(/[?&]+$/, "");
  history.replaceState({}, "", path);
  const code = getCode();

  try {
    const response = await fetch(config.login, {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const result = await response.json();
    if (result.error) return alert(JSON.stringify(result, null, 2));

    return result.token;
  } catch (error) {
    alert(error); /////// consider error html element instead of alert
    location.reload();
  }
};

const authenticate = async () => {
  const token = await getToken();
  const octokit = new Octokit({ auth: token });
  const user = await octokit.request(
    getUserOperation.request,
    getUserOperation.data,
  );
  const memberShip = await octokit.request(getMembershipOperation.request, {
    ...getMembershipOperation.data,
    username: user.data.login,
  });
  ////// response code ok 204, not member 302, not found 404
  if (memberShip.status != 204) {
    console.log("Something went wrong !");
    return undefined;
  } else return { octokit, user };
};

export default authenticate;
