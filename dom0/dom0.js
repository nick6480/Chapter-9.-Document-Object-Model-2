

/* Default er ikke nødvendig for at det virker, og det gør ikke nogen forskell hvor default bliver placeret.  */

'use strict';

let diceOne = 0;
let diceTwo = 0;
let diceThree = 0;
let diceFour = 0;
let diceFive = 0;
let diceSix = 0;


let roll;


function rollDice() {

  roll = Math.random();
  roll = Math.floor(roll * 6 + 1);

  switch (roll) {
    case 1:
      diceOne++;
    break;
    case 2:
      diceTwo++;
    break;
    case 3:
      diceThree++;
    break;
    default: console.log("deault")
    case 4:
      diceFour++;
    break;
    case 5:
      diceFive++;
    break;
    case 6:
      diceSix++;
    break;

  };
};


for (let timesRolled = 0; timesRolled < 10; timesRolled++) {
  rollDice();
};


console.log(`Rolled one ${diceOne} times`);
console.log(`Rolled two ${diceTwo} times`);
console.log(`Rolled three ${diceThree} times`);
console.log(`Rolled four ${diceFour} times`);
console.log(`Rolled five ${diceFive} times`);
console.log(`Rolled six ${diceSix} times`);
