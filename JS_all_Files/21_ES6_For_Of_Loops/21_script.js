let technologies = ['html','css','javascript','bootstrap','angular js'];

// Using Normal for loop
let output = '';
for(let i=0; i< technologies.length; i++){
    output += `${technologies[i].toUpperCase()} `;
}
console.log(output);

// for - in loop
output = '';
for(let index in technologies){
    output += `${technologies[index].toUpperCase()} `;
}
console.log(output);

// forEach function
output = '';
technologies.forEach(function(element) {
    output += `${element.toUpperCase()} `;
});
console.log(output);

// for - Of ES6
output = '';
for(let element of technologies){
    output += `${element.toUpperCase()} `;
}
console.log(output);

// Es6 version Arrow Function
output = '';
technologies.forEach((element) => {
    output += `${element.toUpperCase()} `;
});
console.log(output);
