import { ExplorerContext } from "./FileExplorer";
import { useContext } from "react";
import FolderIcon from "public/icons/folder.svg";
import { IDirectory } from "utils/schema/tree.type";

const Directory = ({ directory }: { directory: IDirectory }) => {
  const state = useContext(ExplorerContext);
  return (
    <button
      className="file-explorer-element"
      onClick={() => {
        if (!state) return;
        state.setCurrentPath(directory.name);
        state.setCurrentElement(directory);
        state.setHistory([...state.history, directory]);
      }}
    >
      <FolderIcon className="w-12 fill-slate-500" />
      <p>{directory.name.split("/").pop()}</p>
    </button>
  );
};

export default Directory;
