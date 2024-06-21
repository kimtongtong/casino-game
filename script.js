const casinoForm = document.querySelector(".casino-form");
const casinoInput = document.querySelector(".casino-form input");
const casinoTest = document.querySelector("#quest-box h1");
const casinoCount = document.querySelector("#quest-box p");
const gameStart = document.querySelector("#start-button");

const HIDDEN_CLASSNAME = "hidden";

// const questNumber = Math.floor(Math.random()* (0 - 50)) + 50;
// console.log(questNumber);

const randomArr = new Uint32Array(1);
// console.log(randomArr);

self.crypto.getRandomValues(randomArr);
console.log("무작위로 생성된 6개의 값 = " + randomArr);

const lotto = randomArr.map(el => el % 50 + 1);
//나머지 연산자를 구할 값의 값이 50 이면 50 이내의 값이 30이면 30이내의 값이 출력
// 나눔 값이 50 이면 50은 안나오면 1~50까지 출력하려면 1~50, 0~50으로 입력하면 50이 나오지 않음
console.log("로또 번호 = " + lotto);



function onGameStart() {
    gameStart.classList.toggle(HIDDEN_CLASSNAME);
    casinoForm.classList.toggle(HIDDEN_CLASSNAME);
}

function reStart() {
    location.reload();
}

//일단 여기까지

let wrongCount = 0;
function onInputValue(event) {
    event.preventDefault();
    const numberValue = casinoInput.value;
    console.log(lotto);
    if(numberValue == lotto) {
        casinoTest.innerText = "You Win"
        casinoCount.innerText = "count: " + wrongCount;
        casinoTest.style.fontSize = "40px";
        casinoCount.classList.toggle("count");
        casinoForm.removeEventListener("submit", onInputValue);
        gameStart.value = "Reset";
        onGameStart();
        gameStart.addEventListener("click", reStart);
    } else if(numberValue < lotto) {
        casinoTest.innerText = "Higher"
        wrongCount++;
        casinoCount.innerText = "count:" + wrongCount;
        casinoTest.style.fontSize = "30px";
    } else if(numberValue > lotto)  {
        casinoTest.innerText = "Lower"
        wrongCount++;
        casinoCount.innerText = "count:" + wrongCount;
        casinoTest.style.fontSize = "30px";
    } else {
        casinoTest.innerText = "Write a number"
        casinoTest.style.fontSize = "20px";
    }
    casinoInput.value = "";
}


casinoForm.addEventListener("submit", onInputValue);
gameStart.addEventListener("click", onGameStart);


