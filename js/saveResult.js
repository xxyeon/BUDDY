//const button = document.querySelector("button");
const input = document.querySelector("input");

function saveResult() {
    localStorage.setItem("input", input.value);
}

button.addEventListener("click", saveResult);