const _ = require('lodash');

let array = [100,'test',45,'john',45465,'abcd',67897];

let getEachCount = (array) => {
    let stringCount = 0;
    let numberCount = 0;
    _.forEach(array,(value) => {
        _.isString(value) ? stringCount++ : stringCount;
        _.isNumber(value) ? numberCount++ : numberCount;
    });
    return {
        stringCount : stringCount,
        numberCount : numberCount
    };
};
console.log(getEachCount(array));

// Filter Function Example
let employees = [
    {
        name : 'John',
        age : 40,
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
        designation : 'Asst. Manager',
        active : false
    },
    {
        name : 'Mahesh',
        age : 23,
        designation : 'software Engineer',
        active : true
    }
];

let activeEmployees = _.filter(employees,(employee) => {
    return employee.active;
});
console.log(activeEmployees);

let inActiveEmployees = _.filter(employees,(employee) => {
    return !employee.active;
});
console.log(inActiveEmployees);

let seniorEmployees = _.filter(employees,(employee) => {
    return employee.age >= 35;
});
console.log(seniorEmployees);

let juniorEmployees = _.filter(employees,(employee) => {
    return employee.age < 35;
});
console.log(juniorEmployees);
