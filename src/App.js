import "./App.css";
import GameStage from "./components/GameStage";
import Keyboard from "./components/Keyboard";
import { gameGuessMatrix, initWordleGame } from "./components/Words";
import React, { useState, createContext, useEffect } from "react";
import GameStatus from "./components/GameStatus";
import Reset from "./components/Reset";

//Using context api, create new context for app, export to access appContext on other componenets
//All components importing AppContext, will have access to the States passed through AppContext.Provider below in the App, Anywhere in those componenets 
export const AppContext = createContext();

function App() {
  //Pass states through context using context api , instead of continouly passing as props - access everywhere imported in project 
  const [gameStage, setGameStage] = useState(gameGuessMatrix);
  const [guessAttempts, setGuessAttempts] = useState({ attemptCounter: 0, letterIndex: 0 });
  const [wordBankSet, setWordBankSet] = useState(new Set());
  const [selectedWord, setSelectedWord] = useState("");
  const [incorrectLettersArray, setIncorrectLettersArray] = useState([]);
  const [gameStatus, setGameStatus] = useState({
    isGameRunning: false,
    isWordGuessedCorrect: false,
  });

  useEffect(() => { //use effect hook, on every render of app. Initize the wordle game, by setting word Bank and selecting random word for wordle
    initWordleGame().then((words) => {
      setWordBankSet(words.wordBankSet);
      setSelectedWord(words.choosenWord);
    });
  }, []);

  const onEnterKey = () => {
    if (guessAttempts.letterIndex !== 5) return; //If 5 Letter word not fully typed , do nothing

    let wordGuess = "";

    for (let i = 0; i < 5; i++) { //Retrieve guess attempt and place into a string
      wordGuess += gameStage[guessAttempts.attemptCounter][i].toLowerCase();
    }

    if (wordBankSet.has(wordGuess.toLowerCase())) { //Check if word guess is a valid english 5 letter word, contained in bank, 
      setGuessAttempts({ attemptCounter: guessAttempts.attemptCounter + 1, letterIndex: 0 }); //iff then increment attemptCounter, reset letter index to first letter
    } else {
      alert("INVALID WORD, PLEASE TRY ANOTHER");
    }

    if (wordGuess === selectedWord) { //If Word guessed correctly on current guess attempt, end game, set guessed Correctly screen
      setGameStatus({ isGameRunning: true, isWordGuessedCorrect: true });
      return;
    }
    console.log(guessAttempts);

    if (guessAttempts.attemptCounter === 5) { //If all 6 guess attemtps used, end game, set failed to guess correctly screen
      setGameStatus({ isGameRunning: true, isWordGuessedCorrect: false });
      return;
    }
  };

  const onDeleteKey = () => {
    if (guessAttempts.letterIndex === 0) return; //If current letter guess position, is first index, no letter to delte

    const newGameStage = [...gameStage];                                                //Create copy of game stage (gameGuessMatrix)   
    newGameStage[guessAttempts.attemptCounter][guessAttempts.letterIndex - 1] = "";     // delete the the last letter inserted into new gameGuessMatrix.
    setGameStage(newGameStage);                                                         //setGameStage to new game stage, with updated matrix
    setGuessAttempts({ ...guessAttempts, letterIndex: guessAttempts.letterIndex - 1 }); //Decrement current letter index on guess attempt
  };

  const onSelectLetter = (key) => {
    if (guessAttempts.letterIndex > 4) return; //If current Guess attempt is already 5 letters, do nothing

    const newGameStage = [...gameStage];                                          //Create copy of game stage (gameGuessMatrix)   
    newGameStage[guessAttempts.attemptCounter][guessAttempts.letterIndex] = key;  // Insert pressed key into the new creted gameGuessMatrix
    setGameStage(newGameStage);                                                   // setGameStage to the new game stage with updated matrix

    setGuessAttempts({ //Increment letter index, since new letter was inputed
      attemptCounter: guessAttempts.attemptCounter,
      letterIndex: guessAttempts.letterIndex + 1,
    });
  };

  const onReset = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <nav>
        <h1 className="title">Keshav's Wordle Game</h1>
      </nav>
      <AppContext.Provider
        value={{
          gameStage,
          setGameStage,
          guessAttempts,
          setGuessAttempts,
          selectedWord,
          onSelectLetter,
          onDeleteKey,
          onEnterKey,
          setIncorrectLettersArray,
          incorrectLettersArray,
          gameStatus,
          onReset,
        }}
      >
        <div className="game">
          <GameStage />
          {gameStatus.isGameRunning ? <GameStatus /> : <Keyboard />}
          <Reset />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
