import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import {
  getUserOperation,
  getMembershipOperation,
  createFileOperation,
} from "./requests.js";

window.apiURL = document.getElementById("#form").getAttribute("api");

window.code = new URL(location.href).searchParams.get("code");
// const code = localStorage.getItem("code");
// if(code == '' || code == null || code == undefined) {
//     code = new URL(location.href).searchParams.get("code");
//     localStorage.setItem("code", code.toString());
// }

window.getToken = async function (code) {
  const path =
    location.pathname +
    location.search.replace(/\b(code|state)=\w+/g, "").replace(/[?&]+$/, "");
  history.replaceState({}, "", path);

  try {
    const response = await fetch(window.apiURL, {
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
window.github = {
  token: {},
  user: {},
  octokit: {},
  memberShip: {},
  isMember: false,
  createFileOperation: {},
  repo: "events",
};

window.setGithub = async function (code, github) {
  github.token = await window.getToken(code);
  github.octokit = new Octokit({ auth: github.token });
  github.user = await github.octokit.request(
    getUserOperation.request,
    getUserOperation.data
  );
  getMembershipOperation.data.username = github.user.data.login;
  github.memberShip = await github.octokit.request(
    getMembershipOperation.request,
    getMembershipOperation.data
  );
  github.createFileOperation = createFileOperation;
  ////// response code ok 204, not member 302, not found 404
  if (github.memberShip.status == 204) github.isMember = true;
};
