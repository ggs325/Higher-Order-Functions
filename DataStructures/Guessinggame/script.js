let secretNumber;
let guess = 0;

let guesses = [];

let maxNumOfGuesses = 0;

let difficulty = +prompt("Choose a difficulty: 1. easy, 2. medium, or 3. hard");

switch (difficulty) {
    case 1:
        maxNumOfGuesses = 10;
        secretNumber = Math.floor(Math.random() * 3) + 1;
        break;
    case 2:
        maxNumOfGuesses = 7;
        secretNumber = Math.floor(Math.random() * 60) + 1;
        break;
    case 3:
        maxNumOfGuesses = 3;
        secretNumber = Math.floor(Math.random() * 1000) + 1;
        break;

    default:
        alert("Invalid difficulty. Defaulting to easy.");
        maxNumOfGuesses = 10;
        secretNumber = Math.floor(Math.random() * 3) + 1;
}

for (let i = 0; i <= maxNumOfGuesses; i++) {
    guess = +prompt("Guess a number between 1 and " + (difficulty === 1 ? 3 : difficulty === 2 ? 60 : 1000) + ". You have " + (maxNumOfGuesses - i) + " guesses left.");

    if (guess === secretNumber) {
        alert("Congratulations! You guessed the number!");
        guesses.push(guess);
        alert("Your guesses were: " + guesses.join(", ")  + " The number of guesses you took: " + guesses.length);
        break;
    } else if (guess < secretNumber) {
        alert("Too low! Try again.");
        guesses.push(guess);
    } else {
        alert("Too high! Try again.");
        guesses.push(guess);
    }
}
secretNumber = 9;
alert("game over the secret number was  "
)