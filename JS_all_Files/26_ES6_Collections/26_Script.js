/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

// Map Creation
let technologies = new Map();
technologies.set(1,'HTML');
technologies.set(2,'CSS');
technologies.set(3,'JavaScript');
technologies.set(4,'JQuery');
technologies.set(5,'AJAX');
technologies.set(6,'Bootstrap');

console.log(technologies);

let js = technologies.get(3);
console.log(js);

let hasFive = technologies.has(5);
console.log(`hasFive : ${hasFive}`);

// delete a key
technologies.delete(1);
console.log(technologies);

// Size of Map
console.log(`Size is : ${technologies.size}`);

// get all the keys
let output = '';
for(let key of technologies.keys()){
    output += `${key} `;
}
console.log(output);

// get all the values
output = '';
for(let value of technologies.values()){
    output += `${value} `;
}
console.log(output);

// Get all entries
output = '';
for(let entry of technologies.entries()){
    output += `${entry[0]} => ${entry[1]} \n`;
}
console.log(output);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

// Create a Set
let languages = new Set();
languages.add('HTML');
languages.add('CSS');
languages.add('JavaScript');
languages.add('JQuery');
languages.add('Bootstrap');

console.log(languages);

let hasHTML = languages.has('HTML');
console.log(`hasHTML ? ${hasHTML}`);

// Size
console.log(`Size : ${languages.size}`);

// Clear the Set
languages.clear();
console.log(languages);

// Exception Handling
try {
    // problematic code
    console.log(employee);
}
catch (exception) {
    // handling Logic
    console.log('Employee Not Found ');
}
finally {
    // final Logic
    console.log('Iam From Finally');
}
console.log('got Employee');



