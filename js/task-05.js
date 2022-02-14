const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');
inputText.addEventListener('input', (event) => {
    inputText.value === ''? outputText.textContent = 'Anonymous': outputText.textContent = event.currentTarget.value
});