'use strict';
/*
1. 设置随机数
2. 设置输入数字后的反馈
.guess input要用value
- 为空的情况
- 等于
  -特殊：设置背景变化、显示数字、设置大小
  -记录最高分数
- 大于
- 小于
  -特殊：防止分数低于0
3.设置重来

*/

// 1. 设置随机数
let secretNumber = Math.floor(Math.random() * 19 + 1);
let score = 20;
let guess = 0;
let highScore = 0;

// 2.设置输入数字后的反馈

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (score === 0) {
    document.querySelector('.message').textContent = '😊 Try again!';
  } else if (guess === secretNumber) {
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < secretNumber) {
    if (score === 1) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score === 1) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

// 3. 设置重来
document.querySelector('.again').addEventListener('click', function () {
  if (guess === secretNumber) {
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }
  secretNumber = Math.floor(Math.random() * 19 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  score = 20;
  guess = 0;
});
