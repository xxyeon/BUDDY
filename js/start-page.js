let ice = document.getElementById("play-icebreaker");
let solo = document.getElementById("play-solo");
let rnd = document.getElementById("play-random");
let desc = document.getElementById("desc");
let BU = document.getElementById("title-BU");
let DDY = document.getElementById("title-DDY");
let line = document.getElementById("line");

ice.onmouseenter = function (){
    desc.style.color = "#70A36C";
    desc.textContent = "여러명을 위한 아이스브레이킹!";
    BU.style.color = "#70A36C";
    DDY.style.color = "#70A36C";
    line.style.border = "2px solid #70A36C";
    line.style.background = "#70A36C";
    desc.style.transitionDuration = "0.5s";
    BU.style.transitionDuration = "0.5s";
    DDY.style.transitionDuration = "0.5s";
    line.style.transitionDuration = "0.5s";
}
ice.onmouseleave = function (){
    desc.style.color = "#838383";
    desc.textContent = "뭐하고 놀지? 버디에게 물어봐!";
    BU.style.color = "#838383";
    DDY.style.color = "#838383";
    line.style.color = "#838383";
    line.style.border = "2px solid #838383";
    line.style.background = "#838383";
}
solo.onmouseenter = function (){
    desc.style.color = "#FFCD1B";
    desc.textContent = "나를 위한 시간을 보내자!";
    BU.style.color = "#FFCD1B";
    DDY.style.color = "#FFCD1B";
    line.style.border = "2px solid #FFCD1B";
    line.style.background = "#FFCD1B";
    desc.style.transitionDuration = "0.5s";
    BU.style.transitionDuration = "0.5s";
    DDY.style.transitionDuration = "0.5s";
    line.style.transitionDuration = "0.5s";
}
solo.onmouseleave = function (){
    desc.style.color = "#838383";
    desc.textContent = "뭐하고 놀지? 버디에게 물어봐!";
    BU.style.color = "#838383";
    DDY.style.color = "#838383";
    line.style.border = "2px solid #838383";
    line.style.background = "#838383";
}

rnd.onmouseenter = function (){
    desc.style.color = "#8FB8DE";
    desc.textContent = "랜덤 결과 추출하기";
    BU.style.color = "#8FB8DE";
    DDY.style.color = "#8FB8DE";
    line.style.border = "2px solid #8FB8DE";
    line.style.background = "#8FB8DE";
    desc.style.transitionDuration = "0.5s";
    BU.style.transitionDuration = "0.5s";
    DDY.style.transitionDuration = "0.5s";
    line.style.transitionDuration = "0.5s";
}
rnd.onmouseleave = function (){
    desc.style.color = "#838383";
    desc.textContent = "뭐하고 놀지? 버디에게 물어봐!";
    BU.style.color = "#838383";
    DDY.style.color = "#838383";
    line.style.border = "2px solid #838383";
    line.style.background = "#838383";
}