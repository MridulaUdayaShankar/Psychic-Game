document.addEventListener("DOMContentLoaded", function(e) {
 //global variables   
  var wins, losses, guessesLeft, computerGuess, guessesSoFar;
//array of all the letters to be used in the game for guessing
  var arrayAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"];

  //function to reset all variables and get new letter as computer's guess
  function getNewGuess() {
    computerGuess = arrayAlphabet[Math.floor(Math.random() * arrayAlphabet.length)];
    wins = 0;
    losses = 0;
    guessesLeft = 10;
    guessesSoFar = [];
  }

  // initiate to get first guess & variable assignments
    getNewGuess();
  // on key press and release by the user, assign to userInput variable and convert to lowercase
    document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();

    // Display list of all inputs given by the user so far
    guessesSoFar.push(userInput);

    // if computer guess and user inputs match, user wins ... else loses and guesses left will be decremented by one
    if (computerGuess == userInput) {
      wins++;
    } else {
      losses++;
      guessesLeft--;
    }

    //if guessesLeft reduces to 0, reset the game stats
    if (guessesLeft === 0) {
      getNewGuess();
    }

    //display all the stats to HTML

    document.getElementById("showLetters").innerHTML = guessesSoFar;
    document.getElementById("winsCounter").innerHTML = wins;
    document.getElementById("lossesCounter").innerHTML = losses;
    document.getElementById("guessesCounter").innerHTML = guessesLeft;
  };
});
