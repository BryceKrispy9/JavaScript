// function fullName (fName, lName) { // Function Declaration
//     console.log(`${fName} ${lName}`);
// }
// fullName('Bryce', 'Pearson');

// fullName = function (fName, lName) { // Function Expression
//     console.log(`${fName} ${lName}`);
// }
// fullName('Bryce', 'Pearson');

// helloWorld = () => { console.log("Hi there"); } // Arrow function (Must be stored in a variable)
// helloWorld();

// firstName = fName => { console.log(fName.toUpperCase()); }
// firstName('Bryce')

// fullName = (fName, lName) => { // Just another way to define the function
//     console.log(`${fName} ${lName}`);
// }

// fullName('Bryce', 'Pearson');

const userInfo = function (city, state, zip) { // With Return function and a ','
    return `${city}, ${state} ${zip}`;
}

userInfo('Lehi', 'UT', '84043');