const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const allChoices = document.querySelectorAll('.choice');

let userChoice
let computerChoice

allChoices.forEach(allChoices => allChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    generateResult();
}));

function generateComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResult() {
    if (userChoice === computerChoice) {
        resultDisplay.innerHTML = 'Draw!';
    } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        resultDisplay.innerHTML = 'You Win!';
    } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
        resultDisplay.innerHTML = 'You Win!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
        resultDisplay.innerHTML = 'You Win!';
    } else {
        resultDisplay.innerHTML = 'You Lose!';
    }
}