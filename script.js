'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};
const displayWidth = function (width) {
  document.querySelector('body').style.backgroundColor = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('⛔️ No Number Added');

    //when player wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉 Guess is correct');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    displayBody('#60b347');
    displayWidth('30rem');

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(
        guess < secretNumber ? '📉 Guess is too low' : '📈 Guess is too high'
      );
      score--;
      displayScore(score);

      //when the game is over
    } else {
      displayMessage('💥 Game is Over');
    }
  }
});
//event listener for play again the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayBody('#222');
  displayWidth('15rem');
  displayScore(score);
});
