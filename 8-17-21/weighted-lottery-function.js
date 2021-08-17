const weightedLottery = weights => {
    // Keep track of the weights
    // ['green', 'yellow', 'yellow', 'red', 'red', 'red']
    let containerArray = []; // set to empty array

    Object.keys(weights).forEach(key =>{ // Iterates 3 times
        for (let i = 0; i < weights[key]; i++) { // i sets to 0, for however many times there are a value, return 1
            containerArray.push(key); // add key into container array
        }
    }) // Iterate over object

    return containerArray[(Math.random() * containerArray.length) | 0]; // grabs a random element - | = bitwise "or"
}

const weights = {
    winning: 1,
    losing: 1000
}

weightedLottery(weights);