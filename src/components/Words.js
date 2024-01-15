import wordList from "../wordList.txt";

export const gameGuessMatrix = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const initWordleGame = async () => {
  let wordBankSet;
  let choosenWord;

  await fetch(wordList)
    .then((response) => response.text())
    .then((result) => {
      const wordBankSetArray = result.split("\n");
      choosenWord = wordBankSetArray[Math.floor(Math.random() * wordBankSetArray.length)];
      wordBankSet = new Set(wordBankSetArray);
    });
    
  return { wordBankSet, choosenWord };
};
