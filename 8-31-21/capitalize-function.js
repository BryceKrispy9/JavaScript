const toCapital = str => {
    const words = str.split(" "); // Splits word at each space
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" "); // Iterates over words and grabs first letter
}

const shortStr = "Hi there";
const longStr = "the quick brown fox jumped over the lazy dog";

console.log(toCapital(longStr));

// "word".slice(1) // returns "ord"