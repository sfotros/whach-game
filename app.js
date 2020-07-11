const fields = document.getElementsByClassName('field');
const mrBumps = document.querySelectorAll('.mrBump');
const scorePlayer = document.getElementById('score');
const btn = document.getElementById('btn');

let score = 0;
let timeOfGame = 10000;
let lastField;
let timeUp = false;

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
  const time = randomTime(600, 2000);
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
  setTimeout(() => (timeUp = true), timeOfGame);
};

mrBumps.forEach((mr) =>
  mr.addEventListener('click', () => {
    score++;
    console.log(score);
    scorePlayer.textContent = score;
    mr.classList.remove('up');
  })
);
