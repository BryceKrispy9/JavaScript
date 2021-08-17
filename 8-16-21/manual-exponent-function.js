const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer); // Reducer (Reduce) - Iterating over a collection and performing some kind of function of each element and returning that track value
}

// [2, 2, 2]
// total: 2
// currentValue: 2
// 4

// total: 4
// currentValue: 2
// 8

console.log(toThePowerOf(2, 3));