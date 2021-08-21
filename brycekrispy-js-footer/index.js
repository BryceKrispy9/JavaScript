'use strict'; // All of the code has to follow best practices and the letter of JS Law (semi-colons, syntax options, etc)

var moment = require('moment'); // Older version of import, needed to be imported to our package.json file

/** 
 * Returns a string element with a footer and updating year
 * @param {string} name // pass in this arguement for it to work (What to provide)
 * @return {string}
 */
exports.footer = function (name) { // Older way to export function
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};