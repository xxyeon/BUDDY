const gameContents = document.querySelector("#game");
const icon = document.querySelector("#icon");
const themaInContents = document.querySelector("dd");
const line = document.querySelector("#line");
const buddy = document.querySelectorAll("h1");
const themaInLogo = document.querySelector("h5");

const thema = localStorage.getItem("thema");

const GREEN = "아이스브레이킹";
const YELLO = "혼자 놀기";
const CLASSOFGREEN = "iceBreaking-logo";
const CLASSOFYELLO = "soloing-logo";

if(document.querySelector("button")){
    const resultButton = document.querySelector("button");
    const p = document.querySelector("#game p:first-of-type");

    if(thema === GREEN) {
        gameContents.className = "icBreaking-contents";
        icon.className = CLASSOFGREEN;
        themaInContents.className = CLASSOFGREEN;
        buddy[0].className = CLASSOFGREEN;
        buddy[2].className = CLASSOFGREEN;
        themaInLogo.className = CLASSOFGREEN;
        line.className = CLASSOFGREEN;
        p.classList.add(CLASSOFGREEN);
        resultButton.classList.toggle("icBreaking-contents");
    } else if(thema === YELLO) {
        gameContents.className = "soloing-contents";
        icon.className = CLASSOFYELLO;
        themaInContents.className = CLASSOFYELLO;
        buddy[0].className = CLASSOFYELLO;
        buddy[2].className = CLASSOFYELLO;
        themaInLogo.className = CLASSOFYELLO;
        line.className = CLASSOFYELLO;
        p.classList.add(CLASSOFYELLO);
        resultButton.classList.toggle("soloing-contents");
    }
}else {
    if(thema === GREEN) {
        gameContents.className = "icBreaking-contents";
        icon.className = CLASSOFGREEN;
        themaInContents.className = CLASSOFGREEN;
        buddy[0].className = CLASSOFGREEN;
        buddy[2].className = CLASSOFGREEN;
        themaInLogo.className = CLASSOFGREEN;
        line.className = CLASSOFGREEN;
    } else if(thema === YELLO) {
        gameContents.className = "soloing-contents";
        icon.className = CLASSOFYELLO;
        themaInContents.className = CLASSOFYELLO;
        buddy[0].className = CLASSOFYELLO;
        buddy[2].className = CLASSOFYELLO;
        themaInLogo.className = CLASSOFYELLO;
        line.className = CLASSOFYELLO;
    }
}