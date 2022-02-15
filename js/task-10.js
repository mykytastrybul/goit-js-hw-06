function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const boxes = document.querySelector('div#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
btnCreate.addEventListener('click', () => { createBoxes(input.value); input.value = ''; });
btnDestroy.addEventListener('click', destroyBoxes);
let boxArr = [];
function createBoxes(amount) {
  let arr = [];
  for (let i = boxArr.length; i < Number(amount) + boxArr.length; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}` + 'px';
    box.style.height = `${30 + i * 10}` + 'px';
    box.style.backgroundColor = getRandomHexColor();
    arr.push(box);
    // arr.push(createBox(i));
  };
  boxes.append(...arr);
  boxArr.push(...arr);
};
// function createBox(count) {
// return `<div style="background-color: ${getRandomHexColor()}; height: ${30 + 10 * count}px; width: ${30 + 10 * count}px"></div>`;
// };
function destroyBoxes() {
  boxes.innerHTML = '';
  boxArr = [];
};