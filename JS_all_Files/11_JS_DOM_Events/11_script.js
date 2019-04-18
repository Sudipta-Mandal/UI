var inputField = document.querySelector('#user');
var h3Element = document.querySelector('#msg');
function getMessage() {
    var userName = inputField.value;
    h3Element.textContent = reverseString(userName);
    if(userName === 'naveen'){
        inputField.style.backgroundColor = 'lightgreen';
        inputField.style.borderColor = 'green';
        inputField.style.boxShadow = '0 0 15px green';
        h3Element.style.color = 'green';
    }
    else{
        inputField.style.backgroundColor = 'lightsalmon';
        inputField.style.borderColor = 'red';
        inputField.style.boxShadow = '0 0 15px red';
        h3Element.style.color = 'red';
    }
}

function reverseString(str) {
    var tempStr = '';
    for(var i= str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}

// SMS App
var textAreaElement = document.querySelector('#text-area');
var spanElement = document.querySelector('#span');
var textLimit = 100;
function prepareMsg() {
    var textEnteredLength = textAreaElement.value.length;
    spanElement.textContent = textLimit - textEnteredLength;
}