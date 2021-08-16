let enteredNumber = 15;

switch (enteredNumber % 2) {
    case 0:
        console.log(enteredNumber.toString() + " is an even number");
        break;
    case 1:
        console.log(enteredNumber.toString() + " is an odd number");
        break;
    default:
        console.log("Please enter a number")
}

console.log(enteredNumber);