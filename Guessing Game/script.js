'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log((document.querySelector('.guess').value = 23));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const dispayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //When there is not input
  if (!guess) {
    dispayMessage('No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    dispayMessage('🎉Correct Number!');

    document.querySelector('body').style.backgroundColor = 'blue';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      dispayMessage(guess > secretNumber ? '☝Too high!!' : '👇Too low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dispayMessage('💥You lost the game!');
    }
  }
});

// This code was repeated.
//when guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '☝Too high!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You lost the game!';
//     }

//     //when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '👇Too low!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You lost the game!';
//     }
//   }
// };

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
});
