const buddy = document.querySelectorAll("h1");
const themaInLogo = document.querySelector("h5");
const thema = localStorage.getItem("thema");

const GREEN = "아이스브레이킹";
const YELLO = "혼자 놀기";
const CLASSOFGREEN = "iceBreaking-logo";
const CLASSOFYELLO = "soloing-logo";

if(thema === GREEN) {
    buddy[0].className = CLASSOFGREEN;
    buddy[2].className = CLASSOFGREEN;
    themaInLogo.className = CLASSOFGREEN;
} else if(thema === YELLO) {
    buddy[0].className = CLASSOFYELLO;
    buddy[2].className = CLASSOFYELLO;
    themaInLogo.className = CLASSOFYELLO;
}