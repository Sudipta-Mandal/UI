// creation of arrays
var array = [10,20,30,40,50];
console.log(array);

// Accessing an array and its properties
console.log(array[0]); // 10

// Access not existed property from an array
console.log(array[100]); // undefined

// adding properties to an array
array[5] = 60;
console.log(array);

// Accessing length of an Array
console.log('Length : ' + array.length);

// reverse the array using reverse()
var technologies = ['HTML','CSS','JavaScript','Bootstrap','JQuery'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

console.log('--------------------------------------------------');
// Remove the first value of the array: shift()
technologies = ['HTML','CSS','JavaScript','Bootstrap','JQuery'];
console.log(technologies);
technologies.shift();
console.log(technologies);

console.log('--------------------------------------------------');
// Add value to front of the array:unshift()
technologies = ['HTML','CSS','JavaScript','Bootstrap','JQuery'];
console.log(technologies);
technologies.unshift('Angular JS');
console.log(technologies);

// Remove the last value of the array: pop()
technologies = ['HTML','CSS','JavaScript','Bootstrap','JQuery'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// Add value the end of the array: push()
technologies = ['HTML','CSS','JavaScript','Bootstrap','JQuery'];
console.log(technologies);
technologies.push('Angular JS');
console.log(technologies);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
technologies = ['HTML','CSS','JavaScript','Bootstrap','JQuery'];
// splice(index)
console.log(technologies);
technologies.splice(1);
console.log(technologies);

// splice(index,no of elements)
technologies = ['HTML','CSS','JavaScript','Bootstrap','JQuery'];
console.log(technologies);
technologies.splice(1,2);
console.log(technologies);

// splice(index,1,replace)
technologies = ['HTML','CSS','JavaScript','Bootstrap','JQuery'];
console.log(technologies);
technologies.splice(2,1,'Node JS');
console.log(technologies);

// Create a copy of an array. Typically assigned to a new variable:slice();
var arr1 = [10,20,30,40,50];
var arr2 = arr1.slice();
arr1.splice(2);
console.log('array 1 : ' + arr1);
console.log('array 2 : ' + arr2);

// indexOf()
arr1 = [10,20,30,40,50];
console.log('Index of 30 is : ' + arr1.indexOf(300));

// Join()
arr1 = [10,20,30,40,50];
var joinStr = arr1.join(' , ');
console.log(joinStr);

// Normal Loop Through the array
technologies = ['HTML','CSS','JavaScript','Bootstrap','JQuery'];
var output = '';
for(var i =0; i<technologies.length; i++){
    var element = technologies[i] + ' ';
    output += element;
}
console.log(output);

// for - in loop
output = '';
for(var index in technologies){
    var element = technologies[index] + ' ';
    output += element;
}
console.log(output);

// forEach Loop
output = '';
technologies.forEach(function (element) {
    output += element + ' ';
});
console.log(output);

// ES 6 for-of loop

// ES6 forEach Loop


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
