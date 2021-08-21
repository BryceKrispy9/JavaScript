import { multiply, greeting } from "./helper";

console.log(multiply(2, 5));
console.log(greeting);

import * as helper from './helper'; // Multiple from one file

console.log(helper.multiply(5, 6));
console.log(helper.greeting);