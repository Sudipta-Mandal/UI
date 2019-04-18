/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/

// Create an Object
var obj = {};

obj.name = 'John';
obj.age = 35;
obj.designation = 'Manager';
console.log(obj);

// Access the properties of an object
console.log('Name : ' + obj.name);
console.log('Designation : ' + obj.designation);

// Access the non-existing property
console.log(obj.salary); // Undefined

// Dot Notation & Brackets Notation
console.log('Name : ' + obj.name);
console.log('Name : ' + obj['name']);

// Nested Objects
var student = {
    name : 'Rajan',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    }
};
console.log(student);

// Access nested Object
console.log(student.address);

// Add a prop to an obj
student.college = 'NIT';
console.log(student);

// Add properties to nested Object
student.address.street = 'Ameerpet';
console.log(student);

