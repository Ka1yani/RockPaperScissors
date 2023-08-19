const validChoices = ['rock', 'paper', 'scissors'];

let getPlayerChoice = () => {
    let choice = prompt("Enter your choice").toLowerCase()
    if ( validChoices.includes(choice) ) return choice;
    else {
     alert("Choose among rock, paper or scissors");
     return getPlayerChoice();
    }
 } 


let getComputerChoice = () => {
    let choiceIndex = Math.floor(Math.random() * validChoices.length);
    return validChoices[choiceIndex];
 }

let playRound = (playerSelection, computerSelection) => {
   if(playerSelection === computerSelection) {
    return "Tie";
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
    let pc, cc;
    while(i-->0){
        pc = getPlayerChoice();
        cc = getComputerChoice();
        console.log(playRound(pc, cc));
    }
}
 
game();
