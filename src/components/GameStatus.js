import React, { useContext } from "react";
import { AppContext } from "../App";

function GameStatus() {
  const {
    gameStage,
    setGameStage,
    guessAttempts,
    gameStatus,
    onSelectLetter,
    selectedWord,
    onDeleteKey,
  } = useContext(AppContext);
  let selectedWordCaps = selectedWord.toUpperCase();
  
  return (
    <div className="gameStatus">
      {gameStatus.isWordGuessedCorrect
        ? <h3>Congrats! You guessed the Wordle in {guessAttempts.attemptCounter} attempts! Play Again :D</h3>
        : <h3>Sorry, You Failed to Guess the Wordle! Better Luck Next Time :(</h3>

      }
      <h1>The Correct Wordle Was : {selectedWordCaps}</h1>
    </div>
  );
}

export default GameStatus;
