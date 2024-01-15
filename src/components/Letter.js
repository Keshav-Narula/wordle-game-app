import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ currGuessAttemptLetterIndex, currGuessAttemptRow }) {
  const { gameStage, setIncorrectLettersArray, guessAttempts, selectedWord } =
    useContext(AppContext);

  const letterGuess = gameStage[currGuessAttemptRow][currGuessAttemptLetterIndex]; //Retrive letter in guess
  const boolLetterCorrect = selectedWord.toUpperCase()[currGuessAttemptLetterIndex] === letterGuess; //True letter is correct in guess - Green
  const boolLetterInWrongIndex = //True iff letter in guess is in wrong index
    !boolLetterCorrect && letterGuess !== "" && selectedWord.toUpperCase().includes(letterGuess);
  
    const letterState = //Determine whether that specific letter in the guess is either in the correct index, exists but in the wrong index, or just incorrect. For css styling
    guessAttempts.attemptCounter > currGuessAttemptRow &&
    (boolLetterCorrect ? "boolLetterCorrect" : boolLetterInWrongIndex ? "boolLetterInWrongIndex" : "boolLetterIncorrect");

  useEffect(() => {
    if (letterGuess !== "" && !boolLetterCorrect && !boolLetterInWrongIndex) { //Check and add letter to incorrectLettersArray 
      console.log(letterGuess);
      setIncorrectLettersArray((prev) => [...prev, letterGuess]);
    }
  }, [guessAttempts.attemptCounter]);
  return (
    <div className="letter" id={letterState}>
      {letterGuess}
    </div>
  );
}

export default Letter;
