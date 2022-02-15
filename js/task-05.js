const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');
inputText.addEventListener('input', (event) => {
    const name = event.currentTarget.value;
    inputText.value === '' ? outputText.textContent = 'Anonymous' : outputText.textContent = name;
});