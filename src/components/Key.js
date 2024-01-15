import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyValue, isLargeKey, isKeyGuessed }) {
  const { gameStatus, onSelectLetter, onDeleteKey, onEnterKey } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameStatus.isGameRunning) return;

    if (keyValue === "ENTER") {
      onEnterKey();
    } else if (keyValue === "DELETE") {
      onDeleteKey();
    } else {
      onSelectLetter(keyValue);
    }
  };
  
  return (
    <div
      className="key"
      id={isLargeKey ? "largeKey" : isKeyGuessed && "keyGuessed"}
      onClick={selectLetter}
    >
      {keyValue}
    </div>
  );
}

export default Key;
