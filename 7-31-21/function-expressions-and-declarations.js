// function greeting() { // Function declaration
//     return "Hi there!";
// }

// var greetingTwo = function () { // Function expression (Anonymous function) - More modular (Can be moved around easier or to be created at any point)
//     return 'Hi there again';
// }; // Must have semi-colon

// console.log(greeting());
// console.log(greetingTwo());

var age = 3;

function buildMenuTwo () {
    return "Another kid's menu"; // Function declarations should not be placed inside of curly braces (conditionals)
}

if (age <= 10) {
    var buildMenu = function () {
        return "Kid's Menu";
    };

    console.log(buildMenu());
    console.log(buildMenuTwo()); // Function declarations should not be placed inside of curly braces (conditionals)
}