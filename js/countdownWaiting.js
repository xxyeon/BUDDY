const time = document.querySelector(".explain:last-child");

function counting() {
    if(parseInt(time.innerText) === 1){ //0으로 조건을 걸면 -1 나타난 후 페이지 이동
        if(localStorage.getItem("gameName") === "훈민정음 게임"){
            location.href = "hunmin.html";
        } else if(localStorage.getItem("gameName") === "눈 코 입 게임"){
            location.href = "faceMatch.html";
        }
    }
    time.innerText -= 1;
}
setInterval(counting, 1000);