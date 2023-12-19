"use client";
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
import {
  Element,
  IDirectory,
  ResourcesType,
  TreeType,
} from "utils/schema/tree/tree-type";

export interface IExplorerContext {
  currentElement: IDirectory;
  setCurrentElement: Dispatch<SetStateAction<IDirectory>>;
  currentPath: string;
  setCurrentPath: Dispatch<SetStateAction<string>>;
  history: IDirectory[];
  setHistory: Dispatch<SetStateAction<IDirectory[]>>;
}

export const ExplorerContext = createContext<IExplorerContext | null>(null);

interface IProps {
  tree: TreeType;
  repoName: string;
  root: string;
}

const FileExplorer = ({ tree, repoName, root }: IProps) => {
  const [currentPath, setCurrentPath] = useState<string>(tree.name);
  const [currentElement, setCurrentElement] = useState<IDirectory>(tree);
  const [history, setHistory] = useState<IDirectory[]>([tree]);
  const [resources, setResources] = useState<ResourcesType | undefined>(
    tree.resources
  );
  useEffect(() => {
    setResources(currentElement.resources);
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
          {resources &&
            resources.map((element: Element, index: number) => (
              <div key={index}>
                {element.type == "directory" ? (
                  <Directory directory={element} />
                ) : (
                  <File file={element} repoName={repoName} root={root} />
                )}
              </div>
            ))}
        </div>
      </div>
    </ExplorerContext.Provider>
  );
};

export default FileExplorer;
