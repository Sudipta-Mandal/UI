/*
    Destructing In ES6
    ------------------

    Using this feature instead of creating individual variables for each
    Element of an array, we can do this in a single line

    We can also use this to swap between two values

    We can also use this to create the new properties of an existing Object
    properties
 */


// Before Destructing Feature
let student = ['Rajan',25,'Engineering'];
let sName = student[0];
let sAge = student[1];
let sCourse = student[2];
console.log(`Name : ${sName} Age : ${sAge} Course : ${sCourse}`);

// After Destructing Feature ES6
let employee = ['John',45,'Manager'];
let [eName , eAge , eDesg ] = employee;
console.log(`Name : ${eName} Age : ${eAge} Desg : ${eDesg}`);

// Swap the values of two variables
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log(`a : ${a} b: ${b}`);

// with Destructing
let x = 10;
let y = 20;
[x , y] = [y , x];
console.log(`x : ${x} y: ${y}`);

// Destructing with Objects
let mobile = {
    color : 'Black',
    brand : 'Lenovo',
    capacity : '64gb'
};

let { color:nColor,
      brand:nBrand,
      capacity:nCapacity
} = mobile;

console.log(`Color : ${nColor} Brand : ${nBrand} Capacity : ${nCapacity}`);



