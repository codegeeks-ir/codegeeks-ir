import CloudIcon from "public/icones/cloud.svg";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import File from "./File";
import Directory from "./Directory";
import Path from "./Path";
import BackButton from "./BackButton";
import DownloadLink from "./DownloadLink";

export interface IElement {
  type: "directory" | "file";
  name: string;
  size: string;
  time: string;
  contents?: IElement[];
}

export interface IReport {
  type: "report";
  directories: number;
  files: number;
}

export interface IExplorerContext {
  currentElement: IElement;
  setCurrentElement: Dispatch<SetStateAction<IElement>>;
  currentPath: string;
  setCurrentPath: Dispatch<SetStateAction<string>>;
  history: IElement[];
  setHistory: Dispatch<SetStateAction<IElement[]>>;
}

export const ExplorerContext = createContext<IExplorerContext | null>(null);

const FileExplorer = ({ root, report, repoName, rootDirectory }: {
  root: IElement;
  report: IReport;
  repoName: string;
  rootDirectory: string;
}) => {
  const [currentPath, setCurrentPath] = useState<string>(root.name);
  const [currentElement, setCurrentElement] = useState<IElement>(root);
  const [history, setHistory] = useState<IElement[]>([root]);
  const [content, setContent] = useState<IElement[] | undefined>(root.contents);
  useEffect(() => {
    setContent(currentElement.contents);
  }, [currentElement]);
  return (
    <ExplorerContext.Provider
      value={{
        currentElement,
        setCurrentElement,
        currentPath,
        setCurrentPath,
        history,
        setHistory,
      }}
    >
      <div className="my-4 flex flex-col flex-wrap" dir="ltr">
        <div className="file-explorer-header">
          <CloudIcon className="w-6 grow-0 fill-slate-300" />
          <Path path={currentPath} />
          <DownloadLink repoName={repoName} />
        </div>
        <div className="file-explorer-content">
          <BackButton />
          {content &&
            content.map((element: IElement, index: number) => (
              <div key={index}>
                {element.type == "directory" ? (
                  <Directory element={element} />
                ) : (
                  <File
                    element={element}
                    repoName={repoName}
                    rootDirectory={rootDirectory}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </ExplorerContext.Provider>
  );
};

export default FileExplorer;
