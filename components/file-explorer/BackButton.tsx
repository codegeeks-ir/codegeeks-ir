import { ExplorerContext } from "./FileExplorer";
import { useContext, useState } from "react";
import BackIcon from "public/icones/back-folder.svg";

const BackButton = () => {
  const state = useContext(ExplorerContext);
  const disabled = state!.history.length <= 1 || !state;
  return (
    <button
      className="mr-2"
      onClick={() => {
        if (disabled) return;
        state.setCurrentElement(state.history[state.history.length - 2]);
        state.setCurrentPath(state.history[state.history.length - 2].name);
        state.setHistory(state.history.slice(0, -1));
      }}
      disabled={disabled}
    >
      <BackIcon
        className={`w-12 fill-amber-400 ${disabled ? "invisible" : "visible"}`}
      />
    </button>
  );
};

export default BackButton;
