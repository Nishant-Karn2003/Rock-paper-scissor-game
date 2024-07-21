let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");



///Showing the options chosen///




let redBox=document.querySelector(".user-choice");
let blueBox=document.querySelector(".comp-choice");


//  User se choice lii jaa rahi hai///

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
      playGame(userChoice);
        
    })
}
)

///Draw game condition////
 const drawGame = ()=>{
    console.log("game was draw");
    msg.innerText="Game was draw. Play Again!"
    msg.style.backgroundColor="#081b31"
 }


const showWinner=(userWin)=>{
    if(userWin){
    
        console.log("You Win!");
        msg.innerText="You Win!";
        msg.style.background="Green"
        userScore++;
        document.querySelector("#user-score").innerText=userScore;
    
          
    }

    else{
        console.log("You Lose");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red"
        compScore++;
        document.querySelector("#comp-score").innerText=compScore;
    }
}



////Computer ko bataya jaa raha hai ki  user ne kya choice lii hai///

const playGame=(userChoice)=>{
    console.log("User choice =",userChoice);
    redBox.innerText=`Your choice is:${userChoice}`
    const compChoice=getCompChoice();
    console.log("Comp choice=",compChoice);
    blueBox.innerText=`Comp choice is:${compChoice}`
    if(userChoice==compChoice){
        drawGame();
    }

else{

let userWin=true ;
if(userChoice=="rock"){
 userWin=compChoice=="paper"?false:true;
}

else if(userChoice=="paper"){
    userWin=compChoice=="scissors"?false:true;
}

else{
    userWin=compChoice=="rock"?false:true;
}

showWinner(userWin);





}










 }
 ////Generate a choice from user////


 const getCompChoice=()=>{
 const options=["rock","paper","scissors"];
 const randmIdx=Math.floor(Math.random()*3);
 return options[randmIdx];


 }



 