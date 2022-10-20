const username = prompt("Kindly input your name", `eg "Ifeoluwa"`);

function guessGame(range = 2) {
  const actualNumber = Math.floor((Math.random() * range) + 1)
  const guessedNumber = prompt(`Input a number between 1 and ${range}`);
  if (actualNumber === +guessedNumber) {
    return guessGame(range + 1)
  } else if (!guessedNumber) {
    return;
  }
  return guessGame(range)
}

guessGame();