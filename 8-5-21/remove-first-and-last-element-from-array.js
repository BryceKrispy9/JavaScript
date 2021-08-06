const str = '        good content       ';
console.log(str.trim()); // Trim up extra spaces

let arr = ['ughhhh', 'good', 'another good one', 'ugggg'];
const removeFirstAndLast = arr => {
    if (arr.length >= 3) {
        return arr.slice(1, -1);
    } else {
        throw new Error("You need at least 3 elements in the array");
    }
}

console.log(removeFirstAndLast([1, 2, 3, 4, 5]));

console.log(removeFirstAndLast(['A', 'B', 'C', 'D']));

console.log(removeFirstAndLast([1, 2]));