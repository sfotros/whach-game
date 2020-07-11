const fields = document.getElementsByClassName('field');
const mrBump = document.getElementsByClassName('mrBump');
const score = document.getElementById('score');
const btn = document.getElementById('btn');

const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);
let timeOfGame = 10000;
let lastField;
let timeUp = false;

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
  const time = randomTime(200, 1000);
  const field = randomField(fields);
  field.classList.add('up');
  setTimeout(() => {
    field.classList.remove('up');
    if (!timeUp) popUp();
  }, time);
};

const start = () => {
  score.textContent = 0;
  timeUp = false;
  popUp();
  setTimeout(() => (timeUp = true), timeOfGame);
};
