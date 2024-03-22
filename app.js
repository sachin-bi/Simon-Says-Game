let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;
let highScore = 0;
let p = document.querySelector("p");
let body = document.querySelector("body");


// body.style.backgroundColor = "red";

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("started the game");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 240);
};
function userFlash(btn) {
    btn.classList.add("userFlash");

    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 240);
};

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log("Game Array",gameSeq);
    gameFlash(randBtn);

};


function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! <b>Your score : ${level}</b> <br>  Press ENTER to restart. `;
        console.log("Game Over!on level =",level);

        body.style.backgroundColor = "red";
        setTimeout(function () {
            body.style.backgroundColor ="#009688";
        },150);

        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1); 
};

let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

function reset() {

    if (level>highScore) {
        highScore = level;
        p.innerHTML = ` <b>High Score: ${highScore}</b> `;
    }
  

    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}