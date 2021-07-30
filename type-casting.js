'100' - 42;
// Returns 58

100 + null;
// Returns 100, converted null to 0

'100' + 42;
// Returns a string of "10042" - are we trying to append it to the end of 100, or trying to perform computation?

var ageOne = 12;

String(ageOne); // Converts the number ^ as a string
// or
ageOne.toString(); // Preferred method

var ageTwo = '33';

Number(ageTwo); // Converts the number ^ as a number

parseInt(ageOne); // For Integer

parseFloat(ageOne); // For decimal

parseInt('5555555555 is my phone number') // Just returns phone number

parseInt('foo 5555555555 is my phone number') // Returns NaN (Not a number)

+ ageTwo; // String into a number
// or
var foo = + ageTwo;

// This is important because:
// 1. Many js apps are API based, the outside world is usually sending numbers as strings.
Number('100') + Number(42);
// Returns 142

Number(true);
// Returns 1
Number(false);
// Returns 0