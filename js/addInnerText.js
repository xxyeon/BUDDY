const h5 = document.querySelector("h5");
const dd = document.querySelector("dd");

const text = localStorage.getItem("thema");
const gameName = localStorage.getItem("gameName");

dd.innerText = gameName;
h5.innerText = text;
