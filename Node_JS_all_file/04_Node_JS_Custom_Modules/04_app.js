// Load the custom module
const utility = require('./utility');

let message = "Good Morning";
let revStr = utility.reverseStr(message);
utility.saveToFile('rev.txt',revStr);

// Convert to Palindrome
let theStr = "ABC";
console.log(`Palindrome : ${utility.convertToPalindrome(theStr)}`);


