function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const boxes = document.querySelector('div#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
btnCreate.addEventListener('click', () => { createBoxes(input.value); });
btnDestroy.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  let str = '';
  for (let i = 0; i < amount; i++) {
    str += createBox(i);
  };
  boxes.innerHTML = str;
};
function createBox(count) {
  return `<div style="background-color: ${getRandomHexColor()}; height: ${30 + 10 * count}px; width: ${30 + 10 * count}px"></div>`;
};
function destroyBoxes() {
  boxes.innerHTML = '';
};