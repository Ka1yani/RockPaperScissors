const validChoices = ['rock', 'paper', 'scissors'];

let getPlayerChoice = () => {
    let choice = prompt('Enter your choice').toLowerCase()
    if ( validChoices.includes(choice) ) return choice;
    else {
     alert('Choose among rock, paper or scissors');
     return getPlayerChoice();
    }
 } 


let getComputerChoice = () => {
    let choiceIndex = Math.floor(Math.random() * validChoices.length);
    return validChoices[choiceIndex];
 }

let playRound = (playerSelection, computerSelection) => {
   if(playerSelection === computerSelection) {
    return 'Tie';
   }
   else{
    //if(validChoices.indexOf(playerSelection) > validChoices.indexOf(computerSelection)){
    if(validChoices.indexOf(computerSelection) === (validChoices.indexOf(playerSelection)+1) % 3)
        return `You lose: ${computerSelection} beats ${playerSelection}`;  

    else
        return `You win: ${playerSelection} beats ${computerSelection}`;
   }
}

let game = () => {
    let i = 5;
    let pc, cc, pp = 0, cp = 0;
    while(i-->0){
        pc = getPlayerChoice();
        cc = getComputerChoice();
        let roundResult = playRound(pc, cc);
        console.log(roundResult);
        if(roundResult.includes('win'))
            pp++;
        else if(roundResult.includes('lose'))
            cp++;
    }
    if(pp > cp)
        console.log('You won the game!');
    else
        console.log('You lost the game!');

    console.log(`Score - You: ${pp}     Computer: ${cp}`);  
}
 
game();

