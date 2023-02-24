const container = document.getElementById("#fileExplorer");
const repoName = container.getAttribute("repoName");

fetch("assets/tree.json")
  .then((response) => response.json())
  .then((json) => {
    const treeData = JSON.parse(JSON.stringify(json));
    const array = Array.from(treeData);
    FileExplorer(array, container);
  });

const repoReferenceLink = document.getElementById("repoReferenceLink");
const repoDownloadLink = document.getElementById("repoDownloadLink");

const downloadLink =
  "https://github.com/ceituut/" + repoName + "/archive/refs/heads/main.zip";
const githubLink = "https://github.com/ceituut/" + repoName;

repoReferenceLink.setAttribute("href", githubLink);
repoDownloadLink.setAttribute("href", downloadLink);

export default function FileExplorer({ resources }) {
  resources.forEach((element) => {
    switch (element.type) {
      case "directory":
        const directoryName = element.name.split("/").pop();
        return (
          <details className="directory">
            <summary>{directoryName}</summary>
            {element.resources.length && (
              <FileExplorer resources={element.resources} />
            )}
          </details>
        );
      case "file":
        const fileName = element.name.split("/").pop();
        const fileLink = `https://github.com/ceituut/${repoName}/raw/main/${element.name}`;
        return (
          <a className="file" href={fileLink}>
            {fileName}
          </a>
        );
      default:
        break;
    }
  });
}
