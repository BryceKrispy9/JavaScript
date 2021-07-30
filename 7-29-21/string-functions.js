var str = 'The quick brown fox jumped over the lazy dog';

str.length; // Shows how many characters are in string - this is not a function

str.charAt(2); // Character at index - returns 'e'

str.charAt(200); // Returns empty string "" (Null)

str.concat(' again and again') // Combines with the end of our string (appends) - Does not alter original string

var newStr = str.concat(' again and again') // Creates a permanent add on but is now a new variable

str.includes('quick'); // Returns true if that is in the string

str.startsWith('The'); // Returns true if the word matches the first word in the string

str.endsWith('dog') // or just 'g' - Returns true if the word matches the last word(s) or letter(s) in the string

str.repeat(5); // Repeats the string x amount of times - Does not alter original string

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); // Returns Null - no phone number (This is a regular expression) - good for web validation (Makes so people can't submit random characters in an email field)

'(555)555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); // Returns a full object

str.replace('fox', 'wolf'); // Replaces an item in a string

'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // Returns 0 - Search looks for a pattern that it matches with, it will return the index (If returns -1, it didn't find anything)

str.indexOf('jumped'); // Returns 20 - Looks through whole string. Once it find the first instance of what it's looking for, it returns that index

var str2 = str.concat(' again and again');

str2.indexOf('again'); // Returns 45

str2.lastIndexOf('again'); // Looks through whole string. Once it find the last instance of what it's looking for, it returns that index