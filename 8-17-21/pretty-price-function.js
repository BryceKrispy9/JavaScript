const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) { // Allows us to pass in a whole number
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
}

console.log(prettyPrice(3.42, 99));

Math.floor(3.50) // Returns 3