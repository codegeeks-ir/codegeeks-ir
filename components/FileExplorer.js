import FolderIcon from "public/icones/folder.svg";
import FileIcon from "public/icones/file.svg";
import BackIcon from "public/icones/back-folder.svg";
import CloudIcon from "public/icones/cloud.svg";
import DownloadIcon from "public/icones/download.svg";
import { useEffect, useState } from "react";

const Directory = ({
  element,
  setCurrentElement,
  setCurrentPath,
  history,
  setHistory,
}) => (
  <button
    className="file-explorer-element"
    onClick={() => {
      setCurrentPath(element.name);
      setCurrentElement(element);
      setHistory([...history, element]);
    }}
  >
    <FolderIcon className="w-12 fill-amber-400" />
    <p>{element.name.split("/").pop()}</p>
  </button>
);

const File = ({ element, repoName }) => (
  <a
    className="file-explorer-element"
    href={`https://github.com/codegeeks-ir/${repoName}/raw/main/${element.name}`}
  >
    <FileIcon className="w-12 fill-blue-400" />
    <p>{element.name.split("/").pop()}</p>
  </a>
);

const Element = ({
  element,
  setCurrentElement,
  setCurrentPath,
  history,
  setHistory,
  repoName,
}) => {
  return (
    <>
      {element.type == "directory" ? (
        <Directory
          element={element}
          setCurrentElement={setCurrentElement}
          setCurrentPath={setCurrentPath}
          history={history}
          setHistory={setHistory}
        />
      ) : (
        <File element={element} repoName={repoName} />
      )}
    </>
  );
};

const Path = ({ path }) => (
  <div className="mt-1 flex grow flex-wrap pl-2">
    {path.length > 24 ? (
      <span className="text-sm">../{path.split("/").pop()}</span>
    ) : (
      <>
        {path.split("/").map((item, index) => (
          <span className="text-sm" key={index}>
            {item}/
          </span>
        ))}
      </>
    )}
  </div>
);

const DownloadLink = ({ repoName }) => {
  const repoLink = `https://github.com/codegeeks-ir/${repoName}`;
  const download = `${repoLink}/archive/refs/heads/main.zip`;
  return (
    <a className="grow-0" href={download}>
      <DownloadIcon className="w-6 fill-slate-300" />
    </a>
  );
};

const BackButton = ({
  setCurrentElement,
  setCurrentPath,
  history,
  setHistory,
}) => (
  <button
    className="mr-2"
    onClick={() => {
      if (history.length < 1) return;
      setCurrentElement(history[history.length - 2]);
      setCurrentPath(history[history.length - 2].name);
      setHistory(history.slice(0, -1));
    }}
  >
    <BackIcon
      className={`w-12 fill-amber-400 ${
        history.length > 1 ? "visible" : "invisible"
      }`}
    />
  </button>
);

const FileExplorer = ({ resources, repoName }) => {
  const [currentPath, setCurrentPath] = useState(resources[0].name);
  const [currentElement, setCurrentElement] = useState(resources[0]);
  const [history, setHistory] = useState([resources[0]]);
  const [content, setContent] = useState(resources[0].contents);
  useEffect(() => {
    setContent(currentElement.contents);
  }, [currentElement]);
  return (
    <div className="my-4 flex flex-col flex-wrap" dir="ltr">
      <div className="file-explorer-header">
        <CloudIcon className="w-6 grow-0 fill-slate-300" />
        <Path path={currentPath} />
        <DownloadLink repoName={repoName} />
      </div>
      <div className="file-explorer-content">
        <BackButton
          history={history}
          setHistory={setHistory}
          setCurrentElement={setCurrentElement}
          setCurrentPath={setCurrentPath}
        />
        {content.map((element, index) => (
          <Element
            key={index}
            element={element}
            setCurrentElement={setCurrentElement}
            setCurrentPath={setCurrentPath}
            history={history}
            setHistory={setHistory}
            repoName={repoName}
          />
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;
