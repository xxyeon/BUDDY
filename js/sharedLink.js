const url = window.location.href; // 현재 링크를 가져오는 코드

function showText() {
  const span = document.createElement("span");
  span.innerText = "복사되었습니다";
  span.classList.add("copy");
  gameContents.appendChild(span);
  setTimeout(() => {
    gameContents.removeChild(span);
  }, 3000);
}

const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    //alert("URL이 복사되었습니다.");
    showText();
  };

document.querySelector("#game img:first-of-type").addEventListener("click", copyUrl);
