import { ExplorerContext } from "./FileExplorer";
import { useContext } from "react";
import BackIcon from "public/icones/back-folder.svg";

const BackButton = () => {
  const state = useContext(ExplorerContext);
  return (
    <button
      className="mr-2"
      onClick={() => {
        if (history.length < 1 || !state) return;
        state.setCurrentElement(state.history[state.history.length - 2]);
        state.setCurrentPath(state.history[state.history.length - 2].name);
        state.setHistory(state.history.slice(0, -1));
      }}
    >
      <BackIcon
        className={`w-12 fill-amber-400 ${
          history.length > 1 ? "visible" : "invisible"
        }`}
      />
    </button>
  );
};

export default BackButton;
