const lottoImg = document.createElement("img");
const srcNode = document.createAttribute("src");
const lottoTag = document.querySelector("#lottoMachine");

if(thema === GREEN){
    lottoImg.src = "../images/ver2lottoMachine-iceBreaking.png";
    lottoTag.appendChild(lottoImg);
} else if(thema === YELLO){
    lottoImg.src = "../images/ver2lottoMachine-soloing.png";
    lottoTag.appendChild(lottoImg);
}