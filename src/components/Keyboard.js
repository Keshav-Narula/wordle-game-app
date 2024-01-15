import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    gameStage,
    incorrectLettersArray,
    guessAttempts,
    gameStatus,
    onSelectLetter,
    onEnterKey,
    onDeleteKey,
  } = useContext(AppContext);

  const handleKeyboardEvents = useCallback( //Mapping keyboard events
    (event) => {
      if (gameStatus.isGameRunning) return;

      if (event.key === "Enter") {
        onEnterKey();
      } else if (event.key === "Backspace") {
        onDeleteKey();
      } else {
        keyboardRow1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keyboardRow2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keyboardRow3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [guessAttempts]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardEvents);

    return () => {
      document.removeEventListener("keydown", handleKeyboardEvents);
    };
  }, [handleKeyboardEvents]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboardEvents}>
      <div className="keyboardRow1Div">
        {keyboardRow1.map((key) => {
          return <Key keyValue={key} isKeyGuessed={incorrectLettersArray.includes(key)} />;
        })}
      </div>

      <div className="keyboardRow2Div">
        {keyboardRow2.map((key) => {
          return <Key keyValue={key} isKeyGuessed={incorrectLettersArray.includes(key)} />;
        })}
      </div>

      <div className="keyboardRow3Div">
        <Key keyValue={"ENTER"} isLargeKey />
        {keyboardRow3.map((key) => {
          return <Key keyValue={key} isKeyGuessed={incorrectLettersArray.includes(key)} />;
        })}
        <Key keyValue={"DELETE"} isLargeKey />
      </div>
      
    </div>
  );
}

export default Keyboard;
