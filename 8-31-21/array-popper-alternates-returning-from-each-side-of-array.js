class ArrayPopper {
    constructor(arr) {
        this.arr = arr; // this class has array variable and stores arr
        this.atBeginning = true; // Default variable (atBeginning) that is a boolean (Keep track of what position I'm at in array)
    }

    togglePopper() {
        this.atBeginning = !this.atBeginning; // Toggle the value (Whatever the value is, reverse it)
        return this.atBeginning ? this.arr.pop() : this.arr.shift();  // Ternary Operator that says if value is true, return this.arr.pop (returns the last element from array if true) (if not true, return this.arr.shift [shift returns the very first element from array])
    }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

console.log(ap.togglePopper()); '1'
console.log(ap.togglePopper()); '5'
console.log(ap.togglePopper()); '2'
console.log(ap.togglePopper()); '4'
console.log(ap.togglePopper()); '3'

const strap = new ArrayPopper(['Hi', 'there', 'from', 'JS']);

console.log(strap.togglePopper());
console.log(strap.togglePopper());
console.log(strap.togglePopper());
console.log(strap.togglePopper());
console.log(strap.arr); // Empty Array if at the end
// Anything else beyond this will be undefined because everything from array is taken