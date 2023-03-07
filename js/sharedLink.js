const url = window.location.href; // 현재 링크를 가져오는 코드
console.log(url);
const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    alert("URL이 복사되었습니다.");
  };

document.querySelector("#game img:first-of-type").addEventListener("click", copyUrl);
