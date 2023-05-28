const collectionType = document.getElementById("#form").getAttribute("formFor");

// async function OnOperation(code, operation) {
//   if (code) {
//     const token = await getToken(code);
//     const octokit = new Octokit({ auth: token });
//     const addEventResponse = await octokit.request(request, data);
//     }
// }

function getFilePath(collectionType, fileName, date) {
  return collectionType + "/" + date + "-" + fileName + ".md";
}

function getCommitMessage(preMessage, path) {
  return preMessage + path;
}

function getDateString(date, time) {
  return date.toString() + time.toString();
}

function getFrontMatter(form, collectionType) {
  return `---
    title: "${form.title}"
    lecturer: "${form.lecturer}"
    bio: "${form.bio}"
    githubID: "${form.githubID}"
    date: "${getDateString(form.date, form.time)}"
    location: "${form.location}"
    ---

    `;
}

function getForm(collectionType) {
  switch (collectionType) {
    case "authors":
      break;
    case "posts":
      break;
    case "contests":
      break;
    case "events":
      return {
        title: "",
        lecturer: "",
        bio: "",
        githubID: "",
        date: "",
        time: "",
        location: "",
        details: "",
        fileName: "",
      };
      break;
    case "faqs":
      break;
    case "members":
      break;

    default:
      break;
  }
}

document.addEventListener("alpine:init", () => {
  Alpine.data("form", () => ({
    amir: {
      title: "",
      lecturer: "",
      bio: "",
      githubID: "",
      date: "",
      time: "",
      location: "",
      details: "",
      fileName: "",
    },
    filePath: "events/",
    fileContent: "fgsdgdsg",
    async initGithub() {
      this.github.token = await getToken(code);
      this.github.octokit = new Octokit({ auth: this.github.token });
      this.github.user = await this.github.octokit.request(
        getUserOperation.request,
        getUserOperation.data
      );
      getMembershipOperation.data.username = this.user.login;
      this.memberShip = await this.octokit.request(
        getMembershipOperation.request,
        getMembershipOperation.data
      );
      ////// response code ok 204, not member 302, not found 404
      if (this.memberShip.status == 204) this.isMember = true;
    },
    initForm() {
      this.amir.githubID = window.github.user.data.login; ////// Add githubID for all collections frontmatter
    },
    initData() {
      window.github.createFileOperation.data.repo = collectionType;
      window.github.createFileOperation.data.commiter.name =
        window.github.user.name;
      window.github.createFileOperation.data.commiter.email =
        window.github.user.email;
      window.github.createFileOperation.data.message = getCommitMessage(
        "Add ",
        this.filePath
      );
      window.github.createFileOperation.data.path = getFilePath(
        collectionType,
        this.amir.fileName,
        this.amir.date
      ); /////;
      window.github.createFileOperation.data.content =
        getFrontMatter(this.amir, collectionType) + this.amir.details;
    },
    async createEvent() {
      // if(!this.isMember) {
      //     //error
      //     return;
      // }
      this.initForm();
      this.initData();
      const result = await window.github.octokit.request(
        window.github.createFileOperation.request,
        window.github.createFileOperation.data
      );
      if (result.error) alert(JSON.stringify(result, null, 2));
      console.log(result);
    },
    async init() {
      window.setGithub(window.code).then(
        function (value) {},
        function (error) {}
      );
      console.log(window.github);
    },
  }));
});
