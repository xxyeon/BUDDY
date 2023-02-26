const time = document.querySelector(".explain:last-child");
function counting() {
    if(parseInt(time.innerText) === 1){ //0으로 조건을 걸면 -1 나타난 후 페이지 이동
        location.href = "hunmin/hunmin.html";
    }
    time.innerText -= 1;
}
setInterval(counting, 1000);