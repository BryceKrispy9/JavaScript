const userOne = {
    firstName: "Bryce",
    lastName: "Pearson"
  };
  
const userTwo = {
    firstName: "Devyn",
    lastName: "Pearson"
};
  
// Function expression
const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
};
  
// Arrow function changes the way that the const works
// const fullName = () => {
//   return `${this.lastName}, ${this.firstName}`;
// };
  
const bryce = fullName.bind(userOne);
const devyn = fullName.bind(userTwo);
  
console.log(bryce());
console.log(devyn());