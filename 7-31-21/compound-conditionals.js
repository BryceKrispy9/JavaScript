var age = 15;

if (age <= 10) {
    console.log("You can eat from the kid's menu");
    console.log("You are not old enough to drive");
    console.log("You are not old enough to rent a car");
} else if (age > 16 && age < 25) { // 'else if' is more specific
    console.log("You cannot eat from the kid's menu");
    console.log("You are old enough to drive");
    console.log("You are not old enough to rent a car");
} else if (age >= 25) {
    console.log("You cannot eat from the kid's menu");
    console.log("You are old enough to drive");
    console.log("You are old enough to rent a car");
} else (age == String);
    console.log("Please enter a number")