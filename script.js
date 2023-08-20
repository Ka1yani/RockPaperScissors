const VALID_CHOICES = ['rock', 'paper', 'scissors'];

let getPlayerChoice = () => {
    let choice = prompt('Enter your choice').toLowerCase()
    if (VALID_CHOICES.includes(choice)) return choice;
    else {
        alert('Choose among rock, paper or scissors');
        return getPlayerChoice();
    }
}


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

let playGame = () => {
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

