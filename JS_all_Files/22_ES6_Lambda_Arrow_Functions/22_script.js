// Arrow Functions
/*
-> Arrow functions are the replacement for the normal functions.
-> Arrow function can be written with the symbol '=>'
-> This is the shortcut notation for normal functions
-> Examples are as below

 */

// Normal Function 1
let greet = function() {
  console.log('Good Morning From Normal Fn 1');
};
greet();

// Arrow Function 1
let greetMe = () => {
  console.log('Iam from Arrow Function 1');
};
greetMe();

// Arrow Function 2
let wishMe = (name) => {
  console.log(`Good Morning ${name}`);
};
wishMe('Naveen');

// Arrow Function 3
let printMe = (name,age) => {
  let msg = `Hello Mr.${name} You are just ${age} Yrs Old`;
  return msg;
};
let theMsg = printMe('Williams',95);
console.log(theMsg);

// Use Arrow function to loop through an array
let output = '';
let cars = ['BMW','Audi','Range Rover','Rolls Royce','Ducati','Lamborgini'];
cars.forEach((car) => {
    output += `${car.toUpperCase()} `;
});
console.log(output);

// Create an employee array
let employees = [
    {
      name : 'Rajan',
      age : 25,
      designation : 'Software Engineer',
      active : true
    },
    {
        name : 'Williams',
        age : 45,
        designation : 'Project Manager',
        active : false
    },
    {
        name : 'John',
        age : 35,
        designation : 'Tech Lead',
        active : true
    },
    {
        name : 'Laura',
        age : 23,
        designation : 'Asst. Software Engineer',
        active : false
    }
];

let activeEmployees = employees.filter((employee) => {
    return employee.active;
});
console.log(activeEmployees);

let inActiveEmployees = employees.filter((employee) => {
    return !employee.active;
});
console.log(inActiveEmployees);

let seniorEmployees = employees.filter((employee) => {
    return employee.age >= 35;
});
console.log(seniorEmployees);

let juniorEmployees = employees.filter((employee) => {
    return employee.age < 35;
});
console.log(juniorEmployees);











