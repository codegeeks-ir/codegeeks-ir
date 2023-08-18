const setFilePath = (directory, fileName, date) =>
  directory + "/" + date.toString() + "-" + fileName + ".md";
const setCommitMessage = (preMessage, path) => preMessage + path;
const setDateString = (date, time) => date.toString() + time.toString();

export { setFilePath, setCommitMessage, setDateString };
