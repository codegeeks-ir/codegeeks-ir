export const getUserOperation = {
  request: "GET /user",
  data: {},
};

export const getMembershipOperation = {
  request: "GET /orgs/{org}/members/{username}",
  data: {
    org: "ceituut",
    username: "",
  },
};

export const getFileOperation = {
  request: "GET /repos/{owner}/{repo}/contents/{path}{?ref}",
  data: {
    owner: "ceituut",
    repo: "",
    path: "",
  },
  init: function (type, fileName) {
    switch (type) {
      case "events":
        {
          this.data.repo = "events";
          this.data.path = "events/" + fileName;
        }
        break;

      default:
        break;
    }
  },
};

export const createFileOperation = {
  request: "PUT /repos/{owner}/{repo}/contents/{path}",
  data: {
    owner: "ceituut",
    repo: "",
    path: "",
    message: "",
    commiter: {
      name: "",
      email: "",
    },
    content: "",
  },
};

export const updateFileOperation = {
  request: "PUT /repos/{owner}/{repo}/contents/{path}",
  data: {
    owner: "ceituut",
    repo: "",
    path: "",
    message: "",
    commiter: {
      name: "",
      email: "",
    },
    content: "",
    sha: "",
  },
};

export const deleteFileOperation = {
  request: "DELETE /repos/{owner}/{repo}/contents/{path}",
  data: {
    owner: "ceituut",
    repo: "",
    path: "",
    message: "",
    commiter: {
      name: "",
      email: "",
    },
    sha: "",
  },
};
