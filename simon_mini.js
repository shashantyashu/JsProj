 let gameSeq=[];
 let userSeq=[];

 let btns = ["red", "yellow", "green", "purple"];

 let started = false;
 let level = 0;
 let score = 0;

 let h2 = document.querySelector("h2");
 let h3 = document.querySelector("h3");

 document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game started");
        started = true;
        
        levelUp();
    }; 
 });

 function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
 };

 function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.dir(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
 };

 function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else{
        // let score = 0;
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press any key to start.`;
        if(level > score){
            let score = level;
            h3.innerHTML = `highest score is <b>${score}</b>`;
        };
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"
        }, 1000);
        reset();
    }
 }

 function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    checkAns(userSeq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
 }

 function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
 }