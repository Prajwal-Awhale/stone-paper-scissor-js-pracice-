let userScore =0;
let compScore=0;






const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#compScore");


const genCompChoice=()=>{
const options =["rock","paper","scissor"];
const randomIndx=Math.floor(Math.random()*3);
  return options[randomIndx];

}

const drawGame=()=>{

msg.innerText="Game is draw..!!play again";
msg.style.backgroundColor="black";

}


const showWin = (userWin) =>{

if(userWin){
  userScore++;
  userScorePara.innerText=userScore;
  console.log("u win");
msg.innerText="you win";
msg.style.backgroundColor="green";
}
else{
  compScore++;
  compScorePara.innerText=compScore;
console.log("u loose");
msg.innerText="you loose";
msg.style.backgroundColor="red";

}




}

 


const playgame = (userChoice) =>{
console.log("usrerchoice=", userChoice );

const computerChoice = genCompChoice();
console.log("computer choice = ",computerChoice);

if(userChoice===computerChoice){
  drawGame();
}
else{
  let userWin= true;
  if(userChoice=== "rock"){
    userWin = computerChoice ==="paper"?false : true;
  }
  
if(userChoice==="paper"){
userWin=computerChoice==="rock" ? true : false ;

}

if(userChoice==="scissor"){
  userWin= computerChoice==="paper"?true : false ;
}
showWin(userWin);

}




}
choices.forEach((choice)=>{

choice.addEventListener("click",()=>{
  const userChoice=choice.getAttribute("id");
  playgame(userChoice);
    
})


}



)
