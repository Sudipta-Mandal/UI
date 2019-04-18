/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/

// Function with no arguments
function greetMe() {
    console.log('Iam From GreetMe');
}
greetMe();

// Functions with Arguments
function wishMe(name) {
    console.log('Good Morning ' + name);
}
wishMe('Williams');

// Function with 2 args
function printEmployee(name,age) {
    console.log('Hello ' + name + ' You Are ' + age + ' yrs Old ');
}
printEmployee('John',40,'Manager');

// function with return value
function filter(name) {
    var filteredName = name.toUpperCase();
    return filteredName;
}

var myName = filter('John');
console.log(myName);

// function Expression
var greetMeDude = function(name){
    var msg = 'Good Morning ' + name;
    return msg;
};
var newMsg = greetMeDude('Naveen');
console.log(newMsg);

// Functions inside Objects
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(student.fullName());

// Functions inside nested Objects
var employee = {
    name : 'John',
    age : 35,
    designation : 'Manager',
    address : {
        city : 'Hyderabad',
        country : 'India'
    },
    isFromCity : function(city) {
        return this.address.city === city;
    }
};

console.log('Is From Hyd ? ' + employee.isFromCity('Hyderabad'));

// Functions inside another functions
function outerFn() {
    console.log('Iam from Outer Function');
    function innerFn() {
       console.log('I am From Inner Function');
    }
    innerFn();
}
outerFn();

// Functions as an arguments
function greet1(name) {
    console.log('Iam From Greet 1 ' + name);
}
function greet2(name) {
    console.log('Iam From Greet 2 ' + name);
}
function greetCaller(fName,name) {
    fName(name);
}
greetCaller(greet2,'John');

// Arrays , Objects , Functions
var employees = [
    {
        name : 'John',
        age : 45,
        designation : 'Manager',
        active : true
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : false
    },
    {
        name : 'Williams',
        age : 35,
        designation : 'Team Lead',
        active : true
    }

];
console.log(employees);

function activeEmployees(employees) {
    var tempArray = [];
    for(var index in employees){
        var employee = employees[index];
        if(employee.active === true){
            tempArray.push(employee);
        }
    }
    return tempArray;
}

var theActiveEmployees = activeEmployees(employees);
console.log(theActiveEmployees);

// Filter the Employees using 'filter' function
var seniorEmployees = employees.filter(function (employee) {
    return employee.age > 30;
});
console.log(seniorEmployees);

var juniorEmployees = employees.filter(function (employee) {
    return employee.age < 30;
});
console.log(juniorEmployees);

// Default Args
function someFunction() {
    console.log(arguments);
}
someFunction('John',40,'Manger');

