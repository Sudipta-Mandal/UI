// Classes in JavaScript

// Parent Class
class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Instance Method Object level
    greet(){
        return `Good Morning ${this.firstName} ${this.lastName}`;
    }

    // Static Method Class level
    static getDate(){
        return new Date().toLocaleDateString();
    }
}

// Child Class Inheritance
class Employee extends Person{

    constructor(firstName,lastName,designation){
        super(firstName,lastName);
        this.designation = designation;
    }

    printEmployee(){
        let employee = {
            firstName : this.firstName,
            lastName : this.lastName,
            designation : this.designation
        };
        return employee;
    }
}

// Create a person object
let employee = new Employee('John','Wilson','Manager');
console.log(employee.printEmployee());