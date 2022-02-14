let counterValue = 0;
let num = document.querySelector('#value');
const btnPlus = document.querySelector('[data-action = "increment"]');
const btnMinus = document.querySelector('[data-action = "decrement"]');
btnPlus.addEventListener('click', () => {
    ++counterValue;
    num.textContent = counterValue;
});
btnMinus.addEventListener("click", () => {
    --counterValue;
    num.textContent = counterValue;
});