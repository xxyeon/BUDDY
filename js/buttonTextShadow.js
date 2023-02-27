const button = document.querySelector("button");

function checkShadow() {
    button.classList.toggle("shadow");
}
button.addEventListener("mouseover", checkShadow);
button.addEventListener("mouseout", checkShadow);