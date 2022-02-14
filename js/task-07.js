const inputText = document.querySelector("#font-size-control");
const textText = document.querySelector("#text");
textText.style.fontSize = `${inputText.value}px`
inputText.addEventListener("input", (event) => {
    textText.style.fontSize = `${event.currentTarget.value}px`
});