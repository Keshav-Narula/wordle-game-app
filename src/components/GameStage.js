import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

function GameStage() {
  return (
    <div className="gameStage">
      {" "}
      <div className="guessAttemptRow">
        <Letter currGuessAttemptLetterIndex={0} currGuessAttemptRow={0} />
        <Letter currGuessAttemptLetterIndex={1} currGuessAttemptRow={0} />
        <Letter currGuessAttemptLetterIndex={2} currGuessAttemptRow={0} />
        <Letter currGuessAttemptLetterIndex={3} currGuessAttemptRow={0} />
        <Letter currGuessAttemptLetterIndex={4} currGuessAttemptRow={0} />
      </div>
      <div className="guessAttemptRow">
        <Letter currGuessAttemptLetterIndex={0} currGuessAttemptRow={1} />
        <Letter currGuessAttemptLetterIndex={1} currGuessAttemptRow={1} />
        <Letter currGuessAttemptLetterIndex={2} currGuessAttemptRow={1} />
        <Letter currGuessAttemptLetterIndex={3} currGuessAttemptRow={1} />
        <Letter currGuessAttemptLetterIndex={4} currGuessAttemptRow={1} />
      </div>
      <div className="guessAttemptRow">
        <Letter currGuessAttemptLetterIndex={0} currGuessAttemptRow={2} />
        <Letter currGuessAttemptLetterIndex={1} currGuessAttemptRow={2} />
        <Letter currGuessAttemptLetterIndex={2} currGuessAttemptRow={2} />
        <Letter currGuessAttemptLetterIndex={3} currGuessAttemptRow={2} />
        <Letter currGuessAttemptLetterIndex={4} currGuessAttemptRow={2} />
      </div>
      <div className="guessAttemptRow">
        <Letter currGuessAttemptLetterIndex={0} currGuessAttemptRow={3} />
        <Letter currGuessAttemptLetterIndex={1} currGuessAttemptRow={3} />
        <Letter currGuessAttemptLetterIndex={2} currGuessAttemptRow={3} />
        <Letter currGuessAttemptLetterIndex={3} currGuessAttemptRow={3} />
        <Letter currGuessAttemptLetterIndex={4} currGuessAttemptRow={3} />
      </div>
      <div className="guessAttemptRow">
        <Letter currGuessAttemptLetterIndex={0} currGuessAttemptRow={4} />
        <Letter currGuessAttemptLetterIndex={1} currGuessAttemptRow={4} />
        <Letter currGuessAttemptLetterIndex={2} currGuessAttemptRow={4} />
        <Letter currGuessAttemptLetterIndex={3} currGuessAttemptRow={4} />
        <Letter currGuessAttemptLetterIndex={4} currGuessAttemptRow={4} />
      </div>
      <div className="guessAttemptRow">
        <Letter currGuessAttemptLetterIndex={0} currGuessAttemptRow={5} />
        <Letter currGuessAttemptLetterIndex={1} currGuessAttemptRow={5} />
        <Letter currGuessAttemptLetterIndex={2} currGuessAttemptRow={5} />
        <Letter currGuessAttemptLetterIndex={3} currGuessAttemptRow={5} />
        <Letter currGuessAttemptLetterIndex={4} currGuessAttemptRow={5} />
      </div>
    </div>
  );
}

export default GameStage;
