let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

// let tempPlayerOne = playerOne; // Bad practice
// let tempPlayerTwo = playerTwo;

// playerOne = tempPlayerTwo;
// playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);



function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";
    
    [rightLane, leftLane] = [leftLane, rightLane];
    
    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

console.log(roadRage());