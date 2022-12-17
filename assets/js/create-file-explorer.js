const container = document.getElementById("#fileExplorer");
const repoName = container.getAttribute('repoName');

function createFileExplorer(contents, folderContainer) {
    contents.forEach(element => {
        switch (element.type) {
            case "directory":
                const details = document.createElement('details');
                const summary = document.createElement('summary');
                const directoryName = element.name.split("/").pop();
                folderContainer.appendChild(details);
                details.appendChild(summary);
                details.setAttribute('class', 'directory')
                summary.innerText = directoryName;
                createFileExplorer(element.contents, details);
                break;
            case "file":
                const file = document.createElement('a');
                const fileLink = "https://github.com/ceituut/" + repoName + "/raw/main/" + element.name;
                const fileName = element.name.split("/").pop();
                file.innerText = fileName;
                file.setAttribute('class', 'file');
                file.setAttribute('href', fileLink);
                folderContainer.appendChild(file);
                break;    
            default:
                break;
        }
    });
}

fetch('assets/tree.json')
    .then((response) => response.json())
    .then((json) => {
        const treeData = JSON.parse(JSON.stringify(json));
        const array = Array.from(treeData);
        createFileExplorer(array, container);
});

const repoReferenceLink = document.getElementById('repoReferenceLink');
const repoDownloadLink = document.getElementById('repoDownloadLink');

const downloadLink = "https://github.com/ceituut/" + repoName + "/archive/refs/heads/main.zip";
const githubLink = "https://github.com/ceituut/" + repoName;

repoReferenceLink.setAttribute('href', githubLink);
repoDownloadLink.setAttribute('href', downloadLink);