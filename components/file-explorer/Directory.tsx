import { ExplorerContext, IElement } from "./FileExplorer";
import { useContext } from "react";
import FolderIcon from "public/icones/folder.svg";

const Directory = ({ element }: { element: IElement }) => {
  const state = useContext(ExplorerContext);
  return (
    <button
      className="file-explorer-element"
      onClick={() => {
        if (!state) return;
        state.setCurrentPath(element.name);
        state.setCurrentElement(element);
        state.setHistory([...state.history, element]);
      }}
    >
      <FolderIcon className="w-12 fill-amber-400" />
      <p>{element.name.split("/").pop()}</p>
    </button>
  );
};

export default Directory;
