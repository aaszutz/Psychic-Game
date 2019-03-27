
var $newGameButton = document.getElementById("new-game-button");
var $placeholder = document.getElementById("placeholder");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");

const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keyup', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}



var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var gameRunning = false;
var pickedLetter = "";
var guessedLetterBank = [];

//Have the computer pick a letter
pickedLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
console.log(pickedLetter)

//Start the game by clicking
document.onkeyup = function(event){

    // user starts game
    var userGuess = event.key;

    guessedLetterBank.push(userGuess);


    if (userGuess === pickedLetter) {
        wins++;
        guessesLeft = 9;
        guessedLetterBank = [];
        pickedLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
        console.log(pickedLetter)

    }
    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessedLetterBank = [];
        pickedLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
        console.log(pickedLetter)

    }
    


$wins.textContent = wins;
$losses.textContent = losses;
$guessesLeft.textContent = guessesLeft;
$guessedLetters.textContent = guessedLetterBank;

}

