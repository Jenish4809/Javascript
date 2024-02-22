// let h2 =  document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "From apna college students";
// console.dir(h2);

// let divs = document.querySelectorAll(".Box");
// let idx = 1;
// for(let div of divs){
//    div.innerText = `new unique value ${idx} `;
//    idx++;
// }
// divs[0].innerText = "new Unique value 1";
// divs[1].innerText = "new Unique value 2";
// divs[2].innerText = "new Unique value 3";

// let div = document.querySelector("div");
// console.log(div);

// let name = div.getAttribute("id");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));


// div.style.backgroundColor = "blue";
// div.style.fontSize = "26px";
// div.innerText = "Hello!";
// div.style.color = "white";

// let newBtn = document.createElement("button");
// newBtn.innerText = "clicl me!";
// console.log(newBtn);

// let p = document.querySelector("p"); 
// p.after(newBtn); 

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i> my name  is jenish </i>"; 

// document.querySelector("body").prepend(newHeading);

// let para= document.querySelector("p");
// para.remove();

// newHeading.remove();

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// newBtn.style.color = ("white");
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);

// let para = document.querySelector("p");
let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX, evt.clientY);
//     let a = 25;
//     a++;
//     console.log(a);
// }
// btn1.addEventListener("click", (evt) => {
//     console.log("Your event listener is called - handler1");
// });

// btn1.addEventListener("click", () => {
//     console.log("Your event listener is called - handler2");
// });

// const handler3 = () => {
//     console.log("Your event listener is called - handler3");
// };
// btn1.addEventListener("click", handler3);
// btn1.addEventListener("click", () => {
//     console.log("Your event listener is called - handler4");
// });

// btn1.removeEventListener("click", handler3);

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// let body = document.querySelector("body");
// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else {
//         currMode = "light";
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Gamde was Draw. play again.";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate com choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (
            userChoice == "paper"
        ) {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

