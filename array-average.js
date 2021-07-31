// [1, 2, 3];

// (1 + 2 + 3) / 3; // To get sum, add all numbers together and divide by the amount of numbers

const getAverage = arr => {
    // sum the values from the array
    const reducer = (total, currentValue) => total + currentValue; // "reducer" is not a reserved name, it's just descriptive
    const sum = arr.reduce(reducer);   // reduce's argument is a function

    // get the length of the array
    

    // divide the array sum by the length
    return sum / arr.length;
}

getAverage([1, 2, 3]);

// total: 0
// currentValue: 1
// 1

// total: 1
// currentValue: 2
// 3

// total: 3
// currentValue: 3
// total: 6