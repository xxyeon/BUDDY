const img = document.createElement("img");

const images = [
    {part: "iu.jpeg", full: "iuA.jpeg"},
    {part: "Jihyun.jpeg", full: "JihyunA.jpeg"},
    {part: "jin.jpeg", full: "jinA.jpeg"},
    {part: "JoongKi.jpeg", full: "JoongKiA.jpeg"},
    {part: "Kwangsoo.jpeg", full:"KwangsooA.jpeg"},
    {part: "Mina.jpeg", full: "MinaA.jpeg"},
    {part: "pio.jpeg", full: "pioA.jpeg"},
    {part: "saekyeong.jpeg", full:"saekyeongA.jpeg" },
]
const randomImg = images[Math.floor(Math.random()*images.length)]["part"];
console.log(randomImg);
img.src = `../../img/${randomImg}`;
document.querySelector("#game").appendChild(img);
