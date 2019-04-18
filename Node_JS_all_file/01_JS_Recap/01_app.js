// Create JavaScript Object
let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(employee);

// Arrays
let technologies = ['HTML','CSS','JavaScript','Bootstrap'];

// normal for loop
let output = '';
for(let i = 0; i<technologies.length; i++){
    output += ` ${technologies[i].toUpperCase()} `;
}
console.log(output);

// for-in loop
output = '';
for(let index in technologies){
    output += ` ${technologies[index].toUpperCase()} `;
}
console.log(output);

// for-of loop
output = '';
for(let value of technologies){
    output += ` ${value.toUpperCase()} `;
}
console.log(output);


// forEach Loop
output = '';
technologies.forEach((value) => {
    output += ` ${value.toUpperCase()} `;
});
console.log(output);