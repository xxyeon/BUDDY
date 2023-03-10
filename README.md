## HEADER Template

css에서 색상은 직접 적용해서 사용하시면 됩니다!

> HTML file
```html
<div id="container">
        <header>
            <div id="logo">
                <h5><!--로고 위 한글(혼자놀기, 아이스브레이킹)--></h5>
                <h1>BU</h1><h1>:</h1><h1>DDY</h1>
            </div>
            <hr id="line">
            <nav>
                <ul>
                    <li><a href="start-page.html">시작화면으로</a></li>
                    <li><a href="lotto-page.html">추첨 다시하기</a></li>
                    <li><a href="waiting.html">게임 재실행</a></li>
                </ul>
            </nav>
        </header>
</div>
```

> CSS file
```css
/************/
/*  fonts   */
/************/
/* sniglet-extraBold */
@import url('https://fonts.googleapis.com/css2?family=Sniglet:wght@800&display=swap');

/* jua */
@font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* jalnan */
@font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
/* Inter-Black900 */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

a {
    text-decoration:  none;
    color: #818181;
}

a:hover {
    color: black;
}

#container {
    margin: 0 auto;
    width: 1440px;
}

/****************/
/***** 헤더 *****/
/****************/

header {
    width: 100%;
    height: 157px;
    position: relative;
}

/****************/
/**** 로고 ****/
/****************/
#logo {
    position: absolute;
    width: 219px;
    height: 91px;
    top: 31px;
    left: 60px;
 }

#logo h1 {
    float: left;
    top: 26px;
    text-align: center;
    font-family: 'sniglet', cursive;
    font-weight: 700;
    font-size: 55px;
    text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
}

#logo h1:nth-of-type(2) {
    color: #FEB59E;
}

#logo h5 {
    margin: 0 auto; /*logo 안에서 가운데 정렬*/
    width: 152px;
    height: 26px;
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    font-family: 'BMJUA';
}

#line {
    position: absolute;
    width: 1182px;
    height: 1px;
    left: 258px;
    bottom: 47px;
    border: 2px solid;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
}

/****************/
/*** 네비게이션 ***/
/****************/
nav {
    height: 26px;
    position: absolute;
    top: 64px;
    left: 506px;
    font-family: 'BMJUA';
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
}

li {
    float: left;
    width: 161px;
    height: 24px;
    margin-right: 71px;
    text-align: center;
}

ul:last-child {
    margin-right: 0;
}
```
