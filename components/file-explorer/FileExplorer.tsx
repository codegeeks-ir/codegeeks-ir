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
import {
  Element,
  IDirectory,
  ResourcesType,
  TreeType,
} from "utils/schema/tree.type";

interface IExplorerContext {
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
    tree.resources,
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
      <section className="my-4 flex flex-col flex-wrap" dir="ltr">
        <section className="file-explorer-header">
          <CloudIcon className="w-6 grow-0 fill-slate-500" />
          <Path path={currentPath} />
        </section>
        <section className="file-explorer-content">
          <BackButton />
          {resources &&
            resources.map((element: Element, index: number) => (
              <section key={index}>
                {element.type == "directory" ? (
                  <Directory directory={element} />
                ) : (
                  <File file={element} repoName={repoName} root={root} />
                )}
              </section>
            ))}
        </section>
      </section>
    </ExplorerContext.Provider>
  );
};

export default FileExplorer;
