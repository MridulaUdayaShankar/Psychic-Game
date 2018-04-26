document.addEventListener("DOMContentLoaded", function(e) {
  var wins, losses, guessesLeft, computerGuess, guessesSoFar;

  var arrayAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
//   reset all variables and get new letter as computer's guess.
  function getNewGuess() {
    computerGuess = arrayAlphabet[Math.floor(Math.random() * arrayAlphabet.length)];
    wins = 0;
    losses = 0;
    guessesLeft = 10;
    guessesSoFar = [];
  }

// init to get initial guess & variable assignment.
  getNewGuess();

  document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    guessesSoFar.push(userInput);
    if (computerGuess == userInput) {
      wins++;
    } else {
      losses++;
      guessesLeft--;
    }
    if (guessesLeft === 0) {
      getNewGuess();
    }
    document.getElementById("showLetters").innerHTML = guessesSoFar;
    document.getElementById("winsCounter").innerHTML = wins;
    document.getElementById("lossesCounter").innerHTML = losses;
    document.getElementById("guessesCounter").innerHTML = guessesLeft;
  };
});