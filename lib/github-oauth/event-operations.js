import authenticate from "./authentication";
import {
  createFileOperation,
  deleteFileOperation,
  updateFileOperation,
} from "./requests";

import {
  setDateString,
  setFilePath,
  setCommitMessage,
} from "./common-operations";

const setFrontMatter = (input) =>
  `---
    title: "${input.title}"
    lecturer: "${input.lecturer}"
    bio: "${input.bio}"
    githubID: "${input.githubID}"
    date: "${setDateString(input.date, input.time)}"
    location: "${input.location}"
    ---

  `;

const createEvent = async (input) => {
  const { octokit, user } = await authenticate();
  if (octokit == undefined) return;
  const filePath = setFilePath("events", input.fileName, input.date);
  const result = await octokit.request(createFileOperation.request, {
    ...createFileOperation.data,
    repo: "events",
    path: filePath,
    message: setCommitMessage("Add ", filePath),
    commiter: {
      name: user.name,
      email: user.email,
    },
    content: setFrontMatter(input) + input.details,
  });
  if (result.error) alert(JSON.stringify(result, null, 2));
  console.log(result);
};

const updateEvent = async (filePath) => {
  const { octokit, user } = await authenticate();
  if (octokit == undefined) return;
  const result = await octokit.request(updateFileOperation.request, {
    ...updateFileOperation.data,
    repo: "events",
    path: filePath,
    message: setCommitMessage("Add ", filePath),
    commiter: {
      name: user.name,
      email: user.email,
    },
    content: setFrontMatter(input) + input.details,
    sha: "???",
  });
  if (result.error) alert(JSON.stringify(result, null, 2));
  console.log(result);
};

const deleteEvent = async (filePath) => {
  const { octokit, user } = await authenticate();
  if (octokit == undefined) return;
  const result = await octokit.request(deleteFileOperation.request, {
    ...deleteFileOperation.data,
    repo: "events",
    path: filePath,
    message: setCommitMessage("Delete ", filePath),
    commiter: {
      name: user.name,
      email: user.email,
    },
    sha: "????",
  });
  if (result.error) alert(JSON.stringify(result, null, 2));
  console.log(result);
};

export { createEvent, updateEvent, deleteEvent };
