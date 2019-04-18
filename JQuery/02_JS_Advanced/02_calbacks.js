// Callback Functions
let a = () => {
    console.log('Iam from first function');
};

let b = (callback) => {
    console.log('Iam from second function');
    callback();
};

b(a);

// Actual Callback function
let sum = (a , b) =>{
   return a + b;
};

let mul = (a , b) =>{
    return a * b;
};

let calculate = (a , b , callback) => {
    return callback(a , b);
};
console.log(calculate(10,20,sum));
console.log(calculate(10,20,mul));
console.log(calculate(10,20,(a , b) =>{
    return a - b;
}));










