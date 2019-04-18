// Load the modules
const path = require('path');
const os = require('os');
const fs = require('fs');

console.log(`Current Dir : ${__dirname}`);
console.log(`Current file : ${__filename}`);

let newPath = path.join(__dirname , 'database' , 'data.txt');
console.log(newPath);


// OS Module
let totalMem = os.totalmem();
console.log(`Total Memory : ${totalMem}`);

let freeMem = os.freemem();
console.log(`Free Memory : ${freeMem}`);

let hostName = os.hostname();
console.log(`HostName : ${hostName}`);

let userInfo = os.userInfo().username;
console.log(`UserName : ${userInfo}`);

// FileSystem Module

// write to a file
let fileName = 'data.txt';
let message = 'Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer.';

fs.writeFile(fileName,message,'utf8',(err) => {
    if(err) throw err;
    console.log('dat added successfully');
});

// Read file
fs.readFile(fileName,'utf8',(err,data) => {
    if(err) throw err;
    console.log(data);
});

// read and write
fs.readFile(fileName,'utf8',(err,data) => {
    if(err) throw err;
    fs.writeFile('data2.txt',data,'utf8',(err) => {
        if(err) throw err;
        console.log('data added to new file successfully');
    });
});

// Create a new folder
let dirPath = path.join(__dirname , 'database');
let newFilePath = path.join(__dirname , 'database' , 'abc.txt');
fs.mkdir(dirPath,{recursive:true},(err) => {
    if(err) throw err;
    fs.readFile(fileName,'utf8',(err,data) => {
        if(err) throw err;
        fs.writeFile(newFilePath,data,'utf8',(err) => {
            if(err) throw err;
            console.log('data added to new file successfully');
        });
    });
});








