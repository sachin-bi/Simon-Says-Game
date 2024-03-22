let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;

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
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log(gameSeq);
    gameFlash(randBtn);
    console.log(randBtn);

};


function checkAns() {
    // console.log("current level", level);
    let idx = level - 1;
    if (userSeq[idx] == gameSeq[idx]) {
        console.log("same value");
    }else{
        h2.innerText = "Game Over! Press any key to restart.";
        console.log("Game Over! Press any key to restart.");
    }
}

function btnPress() {
    // console.log("btn was pressed");
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(); 
};

let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
    btn.addEventListener("click", btnPress);
};