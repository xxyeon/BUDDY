function createRandNum(arr) {
    return Math.floor(Math.random() * arr.length);
}

if(gameName === "눈 코 입 게임") {
    const img = document.createElement("img");

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
    const randNum = createRandNum(images);
    localStorage.setItem("index", randNum);
    const randomImg = images[randNum]["part"];
    img.src = `../../img/${randomImg}`;
    document.querySelector("#game").appendChild(img);
} else if(gameName === "훈민정음 게임") {
    const button = document.querySelector("button");
    function printWord() {
        const p = document.querySelector("p");
        const words = ["ㅅㄱ", "ㅅㅂ", "ㅅㅅ", "ㄱㄹ", ];
        const randNum = createRandNum(words);
        console.log(randNum);
        p.innerText = words[randNum];
    }
    printWord();
    button.addEventListener("click", printWord);
}
