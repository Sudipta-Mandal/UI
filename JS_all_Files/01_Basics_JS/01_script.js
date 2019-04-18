//Alert Box
//alert('Welcome to JS');

// confirm Box
//confirm('Good Morning JS');

//console log
console.log('Good Morning');

//Display date on the console
var date = new Date().toLocaleDateString();
console.log(date);

// Display date on the web page using DOM
document.querySelector('#display').textContent = date;

// Display current time
var time = new Date().toLocaleTimeString();
document.querySelector('#display').textContent = time;

//Digital Clock
function digitalClock() {
    var time = new Date().toLocaleTimeString();
    document.querySelector('#time').textContent = time;
}

setInterval(digitalClock,1000);