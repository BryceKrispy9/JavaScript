var age = 8;
var ageTwo = 15;

if (age == ageTwo) { // Bad practice
    console.log('They are equal')
}

if (age === ageTwo) { // Strict equals - values + types must be the same
    console.log('They are equal')
}

if (age !== ageTwo) { // Not equal to
    console.log('Not equal')
}

if (age >= 25) { // Greater than or equal to
    console.log('Old enough to rent a car')
}

if (age <= 10) { // Less than or equal to
    console.log('You can eat from the kid menu')
}