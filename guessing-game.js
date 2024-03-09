function guessingGame() {
  let randomNum = Math.floor(Math.random() * 100);
  let guessCount = 0;
  let winner = false;
  return function (guess) {
    if (guess > randomNum) {
      guessCount++;
      return `${guess} is too high!`;
    }
    if (guess < randomNum) {
      guessCount++;
      return `${guess} is too low!`;
    }

    if (guess === randomNum) {
      if (winner === true) {
        return "The game is over, you already won!";
      }
      guessCount++;
      winner = true;
      return `You win! You found ${randomNum} in ${guessCount} guesses.`;
    }
  };
}

module.exports = { guessingGame };
