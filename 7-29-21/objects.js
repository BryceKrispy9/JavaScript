var user = { 
    name: 'Bryce',
    age: 25,
    city: 'Springville',
    grades: { // Nested object ***
        math: 100,
        english: 92,
        science: 87
    }
}

// user.grades.coding = 99; // Adds a new key value pair inside of grades (WE CANNOT GO BACK AND CHANGE ORIGINAL CODE)

console.log(user.grades); // User object
console.log(user.grades.math); // Inside nested object

// user.name = 'Devyn'; // Resets to a new name

// console.log(user)
// console.log(user.age); // Call the reference point in the object