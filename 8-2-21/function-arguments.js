function fullName(firstName, lastName) {
    return lastName.toUpperCase() + ", " + firstName.toUpperCase();
}

console.log(fullName("Bryce", "Pearson"));

// function sample(arg1, arg2) {
//     console.log(arg1);
//     console.log(arg2);
// }

// console.log(sample("Bryce", "Pearson"));

function fullName(firstName, lastName, language) {
    var language = language || 'English'; // Defaults (|| = 'and')
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Bryce', 'Pearson'))

function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

console.log(sum(1, 1)); // Add 2 numbers