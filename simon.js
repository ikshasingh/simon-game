let gameseq = [];
let userseq =[];

let btns =[ "yellow","red","purple", "green"];
 let started = false;
 let level =0;


 let h3 = document.querySelector("h3");

// key press  for starting game
 document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
 })



//  flasing button
function gameflash(btn){
    console.log(btn);
    btn.classList.add("flash");   //adding flasing property from css
setTimeout(function(){
    btn.classList.remove("flash");  //removing flash to get back its original state
},500);

}

//  random button flesh level up
function levelup(){
    userseq=[];  //bcz ones its pressed we need to enter all the colors again thats why it became empty
    level ++;
    h3.innerText = `level ${level}`;

    // choosing a random color
    let randidx = Math.floor(Math.random()*btns.length);
    let randcol = btns[randidx];     //arr[i]
    let randbtn = document.querySelector(`.${randcol}`) ;  //.bcz we have to select a class and its is variable
//   console.log(randidx);
//   console.log(randcol);
//   console.log(randbtn);

gameseq.push(randcol);
console.log(gameseq)
  
  
    gameflash(randbtn);
}

// flasing button when we are clicking
function userflash(btn){
    console.log(btn);
    btn.classList.add("userflash");   //adding flasing property from css
setTimeout(function(){
    btn.classList.remove("userflash");  //removing flash to get back its original state
},500);

}



//checking the sequence of user is matcjing with game or not

function checkans(idx){
   // console.log("curr level: ", level);
//let idx = level-1;  //level is 1 idx =0
if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        //delAYING IN LEVEL UP FUNCTIION

       setTimeout(levelup,1000);
    }
}else{
    h3.innerHTML = `game over your score was<b>${level} </b> <br>!press any key to restart it`;
//   when the game is over to display red effect
document.querySelector("body").style.backgroundColor="white";
setTimeout(function(){
    document.querySelector("body").style.backgroundColor="red";
  
},200);


reset();
}

}






// storing which button is we flashing or clicking
function btnpress(){
    console.log(this);  //this is reffring to which button out of 4 is flashing
let btn = this;
userflash(btn);
 //printing which color button does user entred
 usercolor = btn.getAttribute("id");
 
 userseq.push(usercolor);
 checkans(userseq.length-1);
}


let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}



//reset function
function reset(){
    started = false;
    gameseq =[];
    userseq =[];
    level =0;
}




