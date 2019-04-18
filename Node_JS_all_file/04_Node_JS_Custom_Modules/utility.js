const fs = require('fs');

let reverseStr = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

let convertToPalindrome = (str) => {
    let tempStr = str;
    for(let i = str.length-2; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

let saveToFile = (filename,data) => {
    fs.writeFile(filename,data,'utf8',(err) => {
        if(err) throw err;
        console.log('data added successfully');
    });
};


module.exports = {
    reverseStr,
    convertToPalindrome,
    saveToFile
};
