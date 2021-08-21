import moment from 'moment';



// console.log(moment.now()); // Gives ability to get EPOCH timestamp

// const rightNow = moment();

// console.log(rightNow); // Gives us a date, GMT and other features



// const birthday = moment('1996-04-23', 'YYYY-MM-DD'); 

// function birthday() {
//     return moment('1996-04-23', 'YYYY-MM-DD');
// }

// console.log(birthday.fromNow()); // How long ago (not limited in years, but can also do days)

// console.log(birthday.format('dddd, MMMM Do YYYY')); // Date formatter - devhints.io has a cheatsheat for moment.js



// const twoWeeksFromNow = moment().add(2, 'weeks');

// console.log(twoWeeksFromNow.toString());

const sixMonthsAgo = moment().subtract(6, 'months');

console.log(sixMonthsAgo.toString());