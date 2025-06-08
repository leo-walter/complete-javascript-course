'use strict';
// 困惑：函数的使用？什么时候加括号，括号里面的参数如何理解

// 1. 设置变量，简化重复的代码
const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// 2. 点击button时，弹出窗口-modal和overlay取消hidden
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
// 3.增加点击×时，关掉窗口
btnCloseModal.addEventListener('click', closeModal);

// 4.点击背景，也能关掉窗口
overlay.addEventListener('click', closeModal);

// 5.按下esc，关掉窗口
document.addEventListener('keydown', function (press) {
  if (press.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
