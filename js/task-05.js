const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');
inputText.addEventListener('input', (event) => {
    const name = event.currentTarget.value;
    outputText.textContent = inputText.value === '' ? 'Anonymous' :  name;
});