// displayMessage
function displayMessage(message,color) {
    var h1Element = document.querySelector('#msg');
    h1Element.textContent = message;
    h1Element.style.backgroundColor = color;
    h1Element.style.padding = '10px';
    h1Element.style.boxShadow = '0 0 15px black';
}

// Event Listeners
var gmButton = document.querySelector('#gm');
gmButton.addEventListener('click',function() {
    newDisplayMessage('Good Morning','red');
});

var gaButton = document.querySelector('#ga');
gaButton.addEventListener('click',function() {
    newDisplayMessage('Good Afternoon','lightblue');
});

var geButton = document.querySelector('#ge');
geButton.addEventListener('click',function() {
    newDisplayMessage('Good Evening','orange');
});

var gnButton = document.querySelector('#gn');
gnButton.addEventListener('click',function() {
    newDisplayMessage('Good Night','lightsalmon');
});

function newDisplayMessage(message,color) {
    var h1Element = document.querySelector('#newMsg');
    h1Element.textContent = message;
    h1Element.style.backgroundColor = color;
    h1Element.style.padding = '10px';
    h1Element.style.boxShadow = '0 0 15px black';
}


// Change Images
var imgElement = document.querySelector('#myImage');

function changeImage(filename) {
    var imgSrc = '../img/'+filename;
    imgElement.setAttribute('src',imgSrc);
}