// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include: •	Rock destroys scissors, •	Scissors cut paper., •	Paper covers rock. 
//1.	Begin by prompting the user for their choice.
//2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
//3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
//4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
//5.	What if the result ends in a tie? Figure out how to handle that as well.
//6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
function displayTitle() {
    window.alert("Welcome to the Game \'rock, paper, scissors\'!");
} 
// 
function playGame() {
   /*
    let rock;
    let paper;
    let scissors; */
    let choice = window.prompt("rock or paper or scissors");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
       return choice;
    }  else {
    console.log('not a valid choice');
    }
      /* 
    if (choice === "rock") {
       window.alert("Rock destroys scissors"); 
       }  else if (choice === "paper") {
       window.alert("Paper covers rock");
       }   else if (choice === "scissors") {
       window.alert("Scissors cut paper");
               }  
 return choice;
} 
*/
function choiceComp() {
    switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
  	}; 
}
function gameResult(choice, choiceComp) {
    if (choice === choiceComp) {
       window.alert("Equal"); 
    } else if (choice === "rock") {
      if (choiceComp === 'paper') {
          console.log('computer wins');
          window.alert("Computer wins");
          return 'Computer wins!';
      } else {
          console.log('you win');
          window.alert("You win");      
          return 'You win!';
      } 
    } else if (choice === "paper") {
      if (choiceComp === 'scissors') {
          console.log('computer wins');
          window.alert("Computer wins");
          return 'Computer wins!';
      } else {
          console.log('you win');
          window.alert("You win"); 
          return 'You win!';
      } 
    } else if (choice === "scissors") {
       if (choiceComp === 'rock') {
           console.log('computer wins');
           window.alert("Computer wins");       
           return 'Computer wins!';
      } else {
          console.log('you win');
          window.alert("You win"); 
          return 'You win!';
      } 
   }
   }
        
 }
/* /////////////////////////////////////////////////  */ 
 function main() {
    displayTitle();
    let playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("Do you want to play again (y/n)?")
    }
    window.alert("Thank you for playing game.");
}
main()       