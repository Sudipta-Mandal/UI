const fs = require('fs');

let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    address : {
        company : 'Infosys',
        location : 'Bangalore'
    }
};
console.log(employee);

// Write to JSON File
fs.writeFile('employee.json',JSON.stringify(employee),'utf8',(err) => {
    if(err) throw err;
    console.log('Added to a file');
});

// Read from JSON file
fs.readFile('employee.json','utf8',(err,data)=> {
    if(err) throw err;
    console.log(JSON.parse(data));
});

