//const icon = document.querySelector("#icon");
//const thema = document.localStorage("gameName");
//const gameContents = document.querySelector("#game");
//const thema = localStorage.getItem("thema");

if(localStorage.getItem("gameName") === "눈 코 입 게임"){
    //img 태그 gameContents에 넣기, 정답에 맞는 연예인 사진 넣기
    //p 태그 연예인 이름 정답 넣기
    /* 눈 코 입 게임에서 필요한 태그 생성 */
    const img = document.createElement("img");
    const resultName = document.createElement("p");  
    const randNum = localStorage.getItem("index");
    const input = localStorage.getItem("input")
    const images = [
        {part: "iu.jpeg", full: "iuA.jpeg", name: "아이유"},
        {part: "Jihyun.jpeg", full: "JihyunA.jpeg", name: "전지현"},
        {part: "jin.jpeg", full: "jinA.jpeg", name: "진"},
        {part: "JoongKi.jpeg", full: "JoongKiA.jpeg", name: "송중기"},
        {part: "Kwangsoo.jpeg", full:"KwangsooA.jpeg", name: "이광수"},
        {part: "Mina.jpeg", full: "MinaA.jpeg", name: "신민아"},
        {part: "pio.jpeg", full: "pioA.jpeg", name: "피오"},
        {part: "saekyeong.jpeg", full:"saekyeongA.jpeg", name: "신세경"},
    ]
    const answer = images[randNum]["name"];

    resultName.innerText = images[randNum]["name"];
    img.src = `../img/${images[randNum]["full"]}`;
    gameContents.appendChild(img);
    gameContents.appendChild(resultName);
    resultName.classList.add("shadow");
    img.classList.add("faceImg");
    resultName.classList.add("imgName")

    if(answer === input){ //사용자 입력이 정답일 경우
        document.querySelector("dd").innerText = "정답입니다!";
        icon.innerText = ":D";
    } else{ //사용자 입력이 틀릴 경우
        icon.innerText = ":("
        document.querySelector("dd").innerText = "땡! 틀렸습니다. 정답은...";
        const newColor = "wrong";
        if(thema === "혼자 놀기"){ //기존 class를 틀렸을 때 나오는 class로 replace (말풍선 색 replace)
            gameContents.classList.replace("soloing-contents", newColor);
        } else {
            gameContents.classList.remove("icBreaking-contents", newColor);
        }
    }
    
} else if(localStorage.getItem("gameName") === "훈민정음 게임") {
    //벌칙(다양한 벌칙 배열 생성후 random 적용)
    const penalty = ["딱밤 맞기", "개인기 보여주기", "커피 쏘기"];
    const span = document.createElement("span");
    //랜덤 숫자 생성
    const randPenalty = Math.floor(Math.random() * penalty.length);
    //print penalty
    span.innerText = penalty[randPenalty];
    gameContents.appendChild(span);
    document.querySelector("dd").innerText = "벌칙은...";
    icon.innerText = ":D"

    span.classList.add("shadow", "penalty");
}