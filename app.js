const fields = document.getElementsByClassName('field');
const mrBumps = document.querySelectorAll('.mrBump');
const scorePlayer = document.getElementById('score');
const btn = document.getElementById('btn');
const btnTenSec = document.getElementById('btn10');
const btnFifteen = document.getElementById('btn15');
const btnTwenty = document.getElementById('btn20');
const btnTimeSel = document.querySelectorAll('.select-time');
const timeLeft = document.querySelector('#time-left');

let score = 0;
let timeOfGame = 10000;
let lastField;
let timeUp = false;
//
let currentTime = 10;

btnTimeSel.forEach((sel) =>
  sel.addEventListener('click', () => {
    if (sel.id === 'btn10') {
      timeOfGame = 10000;
      currentTime = 10;
      timeLeft.textContent = currentTime + ':00';
    } else if (sel.id === 'btn15') {
      timeOfGame = 15000;
      currentTime = 15;
      timeLeft.textContent = currentTime + ':00';
    } else if (sel.id === 'btn20') {
      timeOfGame = 20000;
      currentTime = 20;
      timeLeft.textContent = currentTime + ':00';
    }
  })
);

mrBumps.forEach((mr) =>
  mr.addEventListener('mouseup', () => {
    score++;
    console.log(score);
    scorePlayer.textContent = score;
    mr.classList.remove('up');
  })
);
const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

btn.addEventListener('click', () => {
  start();
});

const randomField = (fields) => {
  const index = Math.floor(Math.random() * fields.length);
  const field = fields[index];
  //   console.log(field);
  if (field === lastField) {
    console.log('same!');
    return randomField(fields);
  }
  lastField = field;
  return field;
};

const popUp = () => {
  const time = randomTime(400, 2000);
  const field = randomField(fields);
  field.classList.add('up');
  setTimeout(() => {
    field.classList.remove('up');
    if (!timeUp) popUp();
  }, time);
};

const start = () => {
  scorePlayer.textContent = 0;
  score = 0;
  timeUp = false;
  popUp();
  setInterval(countDown, 1000);
  setTimeout(() => {
    timeUp = true;
    alert('GAME OVER!');
    clearInterval(timeOfGame);
  }, timeOfGame);
};

mrBumps.forEach((mr) =>
  mr.addEventListener('click', () => {
    score++;
    console.log(score);
    scorePlayer.textContent = score;
    mr.classList.remove('up');
  })
);

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime + ':00';
  if (currentTime === 0) {
    clearInterval(currentTime);
    // alert('GAME OVER!');
  }
};

// let timerShow = setInterval(countDown, 1000);
