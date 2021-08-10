const page = 'else';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`); // 1. Conditional 2. If true 3. If false



var ship = "miss";

function battleShip() {
  return(ship === 'hit' ? '1 point' : 'You lost a point');
}

console.log(battleShip());