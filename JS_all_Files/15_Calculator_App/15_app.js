// Get the HTML Elements
var firstNumberElement = document.querySelector('#firstNumber');
var secondNumberElement = document.querySelector('#secondNumber');
var operatorButton = document.querySelector('#operator');
var equalsButton = document.querySelector('#equals-button');
var resultButton = document.querySelector('#result-button');
var plusButton = document.querySelector('#plus-button');
var minusButton = document.querySelector('#minus-button');
var mulButton = document.querySelector('#divide-button');
var divButton = document.querySelector('#multiply-button');
var clearButton = document.querySelector('#clear-button');

// Click Event for Minus Button
minusButton.addEventListener('click',function() {
   operatorButton.textContent = this.textContent;
});

// Click Event for Plus Button
plusButton.addEventListener('click',function() {
    operatorButton.textContent = this.textContent;
});

// Click Event for div Button
divButton.addEventListener('click',function() {
    operatorButton.textContent = this.textContent;
});

// Click Event for Mul Button
mulButton.addEventListener('click',function() {
    operatorButton.textContent = this.textContent;
});

// click on Equals Button // Calculation Logic
equalsButton.addEventListener('click',function() {
    var firstNumber = firstNumberElement.value;
    var secondNumber = secondNumberElement.value;
    var operator = operatorButton.textContent;
    var result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        var num1 = parseFloat(firstNumber);
        var num2 = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.textContent = result.toString();
    }
});

// Click on Clear Button
clearButton.addEventListener('click',function() {
    firstNumberElement.value = '';
    secondNumberElement.value = '';
    operatorButton.textContent = '+';
    resultButton.textContent = 'RESULT';
});


