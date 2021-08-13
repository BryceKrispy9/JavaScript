// Combining Arrays
// let shoppingCart = [345, 375, 765, 123];
// let newItems = [98, 123];

// shoppingCart.push(...newItems); // "..." is the spread operator
// console.log(shoppingCart) // [345, 375, 765, 123, 98, 123]



//Copying Arrays - Old way
// const shoppingCart = [345, 375, 765, 123];
// const updatedCart = shoppingCart.slice(); // Only chnages 'updatedCart' and not the original cart
// updatedCart.push(5);

// console.log(updatedCart);
// console.log(shoppingCart);


//Copying Arrays - Modern way
// const shoppingCart = [345, 375, 765, 123];
// const updatedCart = [...shoppingCart];
// updatedCart.push(5);

// console.log(updatedCart);
// console.log(shoppingCart);


const { starter, closer, ...relivers } = { // Relivers = anything left in object, sometimes you don't know how many are left (Deconstruction)
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relivers);

// function yourTest() {
//     const highscore = [237.0198, 256.1, 234.846, 237.21, 256.654];
    
//     return (Math.max(...highscore));
// }

// console.log(yourTest());