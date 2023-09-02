const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let playerSelection, computerSelection, playerPoints = 0, computerPoints = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
let i = 5;

let getComputerChoice = () => {
    let choiceIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    return VALID_CHOICES[choiceIndex];
}
playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'Tie';
    }
    else {
        if (VALID_CHOICES.indexOf(computerSelection) === (VALID_CHOICES.indexOf(playerSelection) + 1) % 3)
            return `You lose: ${computerSelection} beats ${playerSelection}`;

        else
            return `You win: ${playerSelection} beats ${computerSelection}`;
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', function func() {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        result.textContent = roundResult;
        if (roundResult.includes('win'))
            playerPoints++;
        else if (roundResult.includes('lose'))
            computerPoints++;
        playerScore.textContent = playerPoints;
        computerScore.textContent = computerPoints;
        if (i-- === 0) {
            if (playerPoints > computerPoints)
                result.textContent = 'You won the game!';
            else
                result.textContent = 'You lost the game!';
            i = 5;
            reset();
        }
    });
});

let reset = () => {
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
};

/* let getPlayerChoice = () => {
    let choice = prompt('Enter your choice').toLowerCase()
    if (VALID_CHOICES.includes(choice)) return choice;
    else {
        alert('Choose among rock, paper or scissors');
        return getPlayerChoice();
    }
} */

/* let playGame = () => {
    let i = 5;
    let playerSelection, computerSelection, playerPoints = 0, computerPoints = 0;
    while (i-- > 0) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes('win'))
            playerPoints++;
        else if (roundResult.includes('lose'))
            computerPoints++;
    }
    if (playerPoints > computerPoints)
        console.log('You won the game!');
    else
        console.log('You lost the game!');

    console.log(`Score - You: ${playerPoints}     Computer: ${computerPoints}`);
}

playGame();
 */
