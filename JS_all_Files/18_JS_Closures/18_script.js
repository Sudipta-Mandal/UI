// Closures Concept of JavaScript
var a = 10;
function outerFn(){
    var b = 20;
    var innerFn = function(){
        var c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return innerFn;
}
function greet(Fname){
    Fname();
}
var iFn = outerFn();
greet(iFn);