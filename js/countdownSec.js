const span = document.querySelector("span");
let sec = 3;
let timer;

function countdown() {
    console.log(sec);
    span.innerText = `00:${String(sec).padStart(2, "0")}`;
    sec--;
    if(sec === -1) {
        clearInterval(timer);
        location.href = "result.html";
    }
}

countdown();
timer = setInterval(countdown, 1000);

function buttonHandler(event) {
    clearInterval(timer);
    sec = 3;
    timer = setInterval(countdown, 1000);
}

document.querySelector("button").addEventListener("click", buttonHandler);