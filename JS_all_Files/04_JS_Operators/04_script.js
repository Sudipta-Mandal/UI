// Assignment operator =
var abc = 'test';
console.log('value : ' + abc);

// Arithmetic operators + - * /
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log('The sum is : ' + sum);

var sub = num1 - num2;
console.log('The sub is : ' + sub);

// Short hand math += , -= , *= , /=
var a = 10;
var b = 20;
var add = 0;
add = add + (a + b); // 0 + 10 + 20 = 30
add += (a + b); // 30 + 10 + 20 = 60
console.log(add); // 60

// Conditional operators < , > , <= , >= , !=
var age = 25;
if(age < 18){
    console.log('You are Minor');
}
else{
    console.log('You are Major');
}

// Unary Operator ++ , --
var x = 10;
x = x + 1; // 11
x += 1; // 12
x++; // 13
console.log(x); // 13

// Logical operators AND , OR
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until parents Agreed');
}

// String Concatenation Operator +
var num = 10 + 20 + '20' + 10 + 20;
console.log(num); // 30201020

var name = 'John';
age = 40;
console.log(name + ' - ' + age);


// Ternary operator (? :)
age = 10;
var message = '';
(age < 18) ?  message = 'You are minor' : message = 'You are Major';
console.log(message);

// Type of operator
var test;
test = 1000;
test = 'abc';
test = true;
test = null;
console.log('value : ' + test + ' Type is : ' + typeof test);


// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}


// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}
