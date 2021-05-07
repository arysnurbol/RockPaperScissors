let userScore = 0; //user score variable
let computerScore = 0; //computer score variable
const userScoreText = document.getElementById("user-score"); //out user score text
const computerScoreText = document.getElementById("computer-score"); //out computer score
const resultText = document.querySelector(".result p"); //out result text

const rockBtn = document.getElementById("r"); //rock button
const paperBtn = document.getElementById("p"); //paper button 
const scissorsBtn = document.getElementById("s"); //scissors button

//get computer choice 
function getComputerChoise() {
    const choices = ['r', 'p', 's']; //choices array
    const randComputerChoice = Math.floor(Math.random() * 3); // get random number between 0-2
    return choices[randComputerChoice]; //return choice from choices element by id 
}

//set result text to html
function setResultText(userChoice, computerChoice, userScore, computerScore) {
    if (userScore > computerScore) {
        resultText.innerHTML = convertToWord(userChoice) + ' beats ' + convertToWord(computerChoice) + '. Your win!'; //set text to html
    }
    if (userScore < computerScore) {
        resultText.innerHTML = convertToWord(userChoice) + ' lose ' + convertToWord(computerChoice) + '. Computer win!'; //set text to html
    }
    if (userScore === computerScore) {
        resultText.innerHTML = convertToWord(userChoice) + ' draw ' + convertToWord(computerChoice) + '. Draw!'; //set text to html
    }
}

//Char convert to word
function convertToWord(letter) {
    if (letter === "r") return "Rock"; // return Rock
    if (letter === "p") return "Paper"; //return Paper
    return "Scissors"; //return Scissors
}
//win  
function win(userChoice, computerChoice) {
    userScore++; //increment user score
    userScoreText.innerHTML = userScore; //out user score to html document
    setResultText(userChoice, computerChoice, userScore, computerScore); // pass params to setResultText
}

//loss
function lose(userChoice, computerChoice) {
    computerScore++; //increment computer score
    computerScoreText.innerHTML = computerScore; //out computer score to html document
    setResultText(userChoice, computerChoice, userScore, computerScore); // pass params to setResultText
}

//draw
function draw(userChoice, computerChoice) {
    setResultText(userChoice, computerChoice, userScore, computerScore); // pass params to setResultText
}

//game 
function game(userChoice /* string */) {
    const computerChoice = getComputerChoise(); //set local param
    const userAndComputerChoice = userChoice + computerChoice; //concate user and computer choices
    switch(userAndComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice); //pass params to win
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice); //pass params to lose
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice); //pass params to draw
            break;
    }
}
//main  
function main() {
    //rock button event listener by click
    rockBtn.addEventListener('click', () => {
        game("r"); //call and pass string static param r
    });

    //paper button event listener by click
    paperBtn.addEventListener('click', () => {
        game("p"); //call and pass string static param p
    });

    //scissors button event listener by click
    scissorsBtn.addEventListener('click', () => {
        game("s"); //call and pass string static param s
    });
}

main(); //call main
