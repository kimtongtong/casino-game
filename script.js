const casinoForm = document.querySelector(".casino-form");
const casinoInput = document.querySelector(".casino-form input");
const casinoTest = document.querySelector("#quest-box h1");
const casinoCount = document.querySelector("#quest-box p");
const gameStart = document.querySelector("#start-button");

const HIDDEN_CLASSNAME = "hidden";

const questNumber = Math.floor(Math.random()* 50);



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
    console.log(questNumber);
    if(numberValue == questNumber) {
        casinoTest.innerText = "You Win"
        casinoCount.innerText = "count: " + wrongCount;
        casinoTest.style.fontSize = "40px";
        casinoCount.classList.toggle("count");
        casinoForm.removeEventListener("submit", onInputValue);
        gameStart.value = "Reset";
        onGameStart();
        gameStart.addEventListener("click", reStart);
    } else if(numberValue < questNumber) {
        casinoTest.innerText = "Higher"
        wrongCount++;
        casinoCount.innerText = "count:" + wrongCount;
        casinoTest.style.fontSize = "30px";
    } else if(numberValue > questNumber)  {
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


