let gameseq = [];
let userseq = []; 
let level = 0;
let max_score = 0;
let btns = ["red","blue","green","yellow"];
let started = false;
document.addEventListener("keypress",function(){
    if(started == false)
    {
        started = true;
        
    }
    levelup();
});

function gameFlash(btn)
{
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    },500);

}

function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },500);
}

function levelup(){
    userseq = [];
    level++;
    let h3 = document.querySelector("h3");
    h3.innerText = `level ${level}`;


    //generate the random color

    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(gameseq);
    gameFlash(randombtn);
}

function checkAns(idx)   
{
    
    let h3 = document.querySelector("h3");
    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        max_score = Math.max(level,max_score);
        h3.innerHTML = `Game Over  <b>your Score is ${level} and max_Score is ${max_score} </b> <br> Press any key to Start Again`
        
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"
        },150);

        reset();
    }
    
}

function btnPress(e)
{
    let btn = e.target;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let Allbtns = document.querySelectorAll(".sub_box");
for(btn of Allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}