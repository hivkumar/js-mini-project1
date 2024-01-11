let userScore = 0;
let comScore =0;

const choise=document.querySelectorAll(".cir");
const msg = document.querySelector("#msg");
const userSrc = document.querySelector("#usersrc");
const comSrc = document.querySelector("#comsrc");


let getcomChoise =() =>{
    let options =["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);

    return options[randomIdx];
};

const draw = () => {
   
    msg.innerText = "Game Was Draw / Play Again!";
    msg.style.background ="#09182A"

};

const showWinner = (userWin,userchois,comChoise) =>{
    if(userWin){
        userScore++;
        userSrc.innerText = userScore;
        msg.innerText = `You Win! Your ${userchois} beats ${comChoise}`;
        msg.style.background ="green";
        
    }else{
        comScore++;
        comSrc.innerText = comScore;
        msg.innerText = `You Loose! ${comChoise} beats Your ${userchois}`;
        msg.style.background ="red";
    }
};

let playGame =(userchois) =>{
      
    console.log("user choise =" , userchois);

    const comChoise =getcomChoise();
    console.log("computer choise =",comChoise);

    if(userchois===comChoise){
        draw();
    }else{
        let userWin = true;
        if(userchois==="rock"){
           userWin = comChoise==="paper" ? false : true;
        }else if(userchois==="paper"){
           userWin = comChoise==="scissor" ? false : true;
        }else{
            userWin = comChoise==="rock" ? false : true;
        }

        showWinner(userWin,userchois,comChoise);

    }

};

 choise.forEach((cir) =>{
         cir.addEventListener("click",()=>{
            const userchois = cir.getAttribute("id");
            

            playGame(userchois);
       })
 });