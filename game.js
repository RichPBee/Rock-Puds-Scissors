const display = document.querySelector('.div2');
const winBanner = document.querySelector('.div1');
let playerChoice = '';

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener('click', () => {
    display.innerHTML = 'You are a rock';
    playerChoice = 'rock'
    roundOfPlay(playerChoice, getComputerChoice())
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', () => {
    display.innerHTML = 'You are a piece of paper';
    playerChoice = 'paper'
    roundOfPlay(playerChoice, getComputerChoice())
})

const scissorBtn = document.getElementById('scissors')
scissorBtn.addEventListener('click', () => {
    display.innerHTML = 'You are a pair of scissors';
    playerChoice = 'scissors'
    roundOfPlay(playerChoice, getComputerChoice())
})

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    let chosenNumber = Math.floor(Math.random() * 2);
    let computerChoice = options[chosenNumber]
    return computerChoice;
}

const roundOfPlay = (choice1, choice2) => {
    if (choice1 === choice2) {
        winBanner.innerHTML = "It's a draw";
    } else if (choice1 === 'rock') {
        if (choice2 === 'scissors') {
            winBanner.innerHTML = 'You win!';
        } else {
            winBanner.innerHTML = 'Computer wins';
        }
    } else if (choice1 === 'scissors') {
        if (choice2 === 'paper') {
            winBanner.innerHTML = 'You win!';
        } else {
            winBanner.innerHTML = 'Computer wins';
        }
    } else if (choice1 === 'paper') {
        if (choice2 === 'rock') {
            winBanner.innerHTML = 'You win!' ;
        } else {
            winBanner.innerHTML = 'Computer wins'
        }
    }
}