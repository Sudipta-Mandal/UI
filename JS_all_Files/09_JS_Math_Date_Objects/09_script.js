/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var piValue = Math.PI;
console.log(piValue);

// Math sqrt
var sqrt = Math.sqrt(144);
console.log('Sqrt of 144 is : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(78,4546,5464,64989,65156,16,351,61,54,5);
console.log('Min : ' + min);

// find the Max of 4 numbers
var max = Math.max(78,4546,5464,64989,65156,16,351,61,54,5);
console.log('Max : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : ' + pow);

// generate the random numbers from 0 to 100
var random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var today = new Date();
console.log(today);

// Get proper date
var date = new Date().toLocaleDateString();
console.log(date);

var time = new Date().toLocaleTimeString();
console.log(time);

// get full day of the week using switch statement
today = new Date().getDay();
var message = 'Today is : ' ;
switch(today){
    case 0:
        message += 'Sunday';
        break;
    case 1:
        message += 'Monday';
        break;
    case 2:
        message += 'Tuesday';
        break;
    case 3:
        message += 'Wednesday';
        break;
    case 4:
        message += 'Thursday';
        break;
    case 5:
        message += 'Friday';
        break;
    case 6:
        message += 'Saturday';
        break;
    default:
        message += 'no - day';
        break;
}
console.log(message);


// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */

var minNumber = Number.MIN_VALUE;
console.log(minNumber);

var maxNumber = Number.MAX_VALUE;
console.log(maxNumber);

var num1 = 100;
console.log('value : ' + num1 + ' Type : ' + typeof num1);

var strNum = num1.toString();
console.log('value : ' + strNum + ' Type : ' + typeof strNum);

// String to number
strNum = '102.4564564';
var num2 = parseFloat(strNum);
console.log('value : ' + num2 + ' Type : ' + typeof num2);


/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
var msg = 'Good Morning';

// length
console.log('Length : ' + msg.length);

// subStr
var subStr = msg.substr(5); // Morning
console.log(subStr);

// subStr
subStr = msg.substr(0,4); // Good
console.log(subStr);

// charAt
var char = msg.charAt(5); // M
console.log(char);

// Example 1 : count the number of o's in the given string
var theStr = 'GoOd MOrning';
function countZeros(str) {
    var count = 0;
    for(var i=0; i<str.length; i++){
        var char = str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
}
console.log('Count is : ' + countZeros(theStr));

// Example 2: Reverse the String
theStr = 'Good Morning';
function reverseString(str) {
    var tempStr = '';
    for(var i= str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
console.log('Reverse String : ' + reverseString(theStr));

// Example 3 : isPalindrome or Not
theStr = 'Good Morning';
function isPalindrome(str) {
    return str === reverseString(str);
}
console.log(theStr + ' is Palindrome ? ' + isPalindrome(theStr));

// Example 4: convert to palindrome str
theStr = 'abcd'; // abcba
function convertToPalindrome(str) {
    var tempStr = str;
    for(var i = str.length-2; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
console.log('Palindrome Str : ' + convertToPalindrome(theStr));

// Example 5: convert the given Number to Word Number
var theNum = '8797';
function wordNumber(strNum) {
    var tempStr = '';
    for(var i=0; i<strNum.length; i++){
        var ch = parseInt(strNum.charAt(i));
        switch(ch){
            case 0:
                tempStr += ' ZERO ';
                break;
            case 1:
                tempStr += ' ONE ';
                break;
            case 2:
                tempStr += ' TWO ';
                break;
            case 3:
                tempStr += ' THREE ';
                break;
            case 4:
                tempStr += ' FOUR ';
                break;
            case 5:
                tempStr += ' FIVE ';
                break;
            case 6:
                tempStr += ' SIX ';
                break;
            case 7:
                tempStr += ' SEVEN ';
                break;
            case 8:
                tempStr += ' EIGHT ';
                break;
            case 9:
                tempStr += ' NINE ';
                break;
        }
    }
    return tempStr;
}
console.log(wordNumber(theNum));

// Example 6 : WordNumberEasy
theNum = '1234';
var myArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
function wordNumberEasy(theNum) {
    var tempStr = '';
    for(var i=0; i<theNum.length;i++){
        var digit = parseInt(theNum.charAt(i));
        tempStr += myArray[digit] + ' ';
    }
    return tempStr;
}
console.log(wordNumberEasy(theNum));

// Example 7 : Triangle String
theStr = 'NAVEEN SAGGAM';
function triangleOne(str) {
    var tempStr = '';
    for(var i=0; i<str.length; i++){
        tempStr += str.substr(0,i+1) + '\n';
    }
    return tempStr;
}
console.log(triangleOne(theStr));

// Example 8 : Triangle String
theStr = 'NAVEEN SAGGAM';
function triangleTwo(str) {
    var tempStr = '';
    for(var i=0; i<= str.length-1; i++){
        tempStr += addSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}
console.log(triangleTwo(theStr));

function addSpace(number) {
    var tempSpace = '';
    for(var i=0; i<number;i++){
        tempSpace += ' ';
    }
    return tempSpace;
}

// Example 9 : Triangle Three
theStr = 'NAVEEN SAGGAM';
function triangleThree(str) {
    var tempStr = '';
    for(var i=str.length; i>0; i--){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}
console.log(triangleThree(theStr));

// Example 10: TriangleFour
theStr = 'NAVEEN SAGGAM';
function triangleFour(str) {
    var tempStr = '';
    for(var i=str.length; i>=0;i--){
        tempStr += addSpace(i) + str.substr(i)+ '\n';
    }
    return tempStr;
}
console.log(triangleFour(theStr));

// Example 11 : Butterfly Triangle
theStr = 'NAVEEN SAGGAM';
function butterflyStr(str) {
    var tempStr = '';
    for(var i=0; i<str.length/2;i++){
        tempStr += str.substr(0,i) + addSpace(str.length - 2*i) + str.substr(str.length-i) + '\n';
    }
    for(var j=str.length/2; j>=0; j--){
        tempStr += str.substr(0,j) + addSpace(str.length - 2*j+1) + str.substr(str.length-j+1) + '\n';
    }
    return tempStr;
}
console.log(butterflyStr(theStr));


// Digital Clocks
function indianClock() {
    var options = {timeZone : 'Asia/Kolkata'};
    var time = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#indianTime').textContent = time;
}
setInterval(indianClock,1000);

function usaClock() {
    var options = {timeZone : 'America/New_York'};
    var time = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#usaTime').textContent = time;
}
setInterval(usaClock,1000);

function chinaClock() {
    var options = {timeZone : 'Asia/Shanghai'};
    var time = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#chinaTime').textContent = time;
}
setInterval(chinaClock,1000);