// import { multiply, greeting } from "./helper"; // Just one (or multiple)

// console.log(multiply(2, 5));
// console.log(greeting);

// import * as helper from './helper'; // Multiple from one file

// console.log(helper.multiply(5, 6));
// console.log(helper.greeting);

import navigation, { greeting, multiply } from "./navigation"; // If you have a default export

console.log(navigation());
console.log(greeting);
console.log(multiply(5, 6));