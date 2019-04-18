// var vs let vs const
let dept = 'Engineering';
if(dept === 'Engineering'){
    var job1 = 'Software';
    let job2 = 'Government';
}
console.log(dept); // Engineering
console.log(job1); // Software , becoz its 'var'
// console.log(job2); // ReferenceError: job2 is not defined becoz its 'let'

for(var i = 0; i<=10; i++){

}
console.log(i); // 11
for(let j = 0; j <=10; j++){

}
//console.log(j); // ReferenceError: j is not defined

const APP_NAME = 'JS App';
console.log(APP_NAME);

// APP_NAME = 'TS App'; // TypeError: Assignment to constant variable.

