import FolderIcon from "public/icones/folder.svg";
import FileIcon from "public/icones/file.svg";
import BackIcon from "public/icones/back-folder.svg";
import { useEffect, useRef, useState } from "react";

function Directory({
  element,
  setCurrentElement,
  setCurrentPath,
  history,
  setHistory,
}) {
  const directoryName = element.name.split("/").pop();
  return (
    <button
      className="file-explorer-element"
      onClick={() => {
        setCurrentPath(element.name);
        setCurrentElement(element);
        setHistory([...history, element]);
      }}
    >
      <FolderIcon className="w-24 fill-amber-400" />
      <p className="text-gray-600">{directoryName}</p>
    </button>
  );
}

function File({ element, repoName }) {
  const name = element.name.split("/").pop();
  const link = `https://github.com/ceituut/${repoName}/raw/main/${element.name}`;
  return (
    <a className="file-explorer-element" href={link}>
      <FileIcon className="w-24 fill-blue-400" />
      <p className="text-gray-600">{name}</p>
    </a>
  );
}

function Element({
  element,
  setCurrentElement,
  setCurrentPath,
  history,
  setHistory,
  repoName,
}) {
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
}

export default function FileExplorer({ resources, repoName }) {
  const [currentPath, setCurrentPath] = useState(resources[0].name);
  const [currentElement, setCurrentElement] = useState(resources[0]);
  const [history, setHistory] = useState([resources[0]]);
  const [content, setContent] = useState(resources[0].contents);
  useEffect(() => {
    setContent(currentElement.contents);
  }, [currentElement]);
  return (
    <>
      <div className="file-explorer-path">
        <div className="flex items-center pl-2">
          {history.length > 1 && <button
            className="mr-4"
            onClick={() => {
              setCurrentElement(history[history.length - 2]);
              setCurrentPath(history[history.length - 2].name);
              setHistory(history.slice(0, -1));
            }}
          >
            <BackIcon className="w-6 fill-amber-400" />
          </button>}
          <div className="flex flex-wrap">
          {currentPath.split('/').map((item, index) => {
            return <span key={index}>/{item }</span>
          })}</div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
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
    </>
  );
}
