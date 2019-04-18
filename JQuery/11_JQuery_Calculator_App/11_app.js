// Get all the HTML Elements
let firstNumberElement = $('#first_number');
let secondNumberElement = $('#second_number');
let operatorButton = $('#operator');
let equalsButton = $('#equals_button');
let resultButton = $('#result_button');
let plusButton = $('#plus-button');
let minusButton = $('#minus-button');
let mulButton = $('#mul-button');
let divButton = $('#div-button');
let clearButton = $('#clear-button');

minusButton.click(function() {
    operatorButton.text($(this).text());
});
plusButton.click(function() {
    operatorButton.text($(this).text());
});
mulButton.click(function() {
    operatorButton.text($(this).text());
});
divButton.click(function() {
    operatorButton.text($(this).text());
});

// Equals Button Logic
equalsButton.click(function() {
    let firstNumber = firstNumberElement.val();
    let secondNumber = secondNumberElement.val();
    let operator = operatorButton.text();
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.text(result);
    }
});

// Clear Button Logic
clearButton.click(function () {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorButton.text('+');
    resultButton.text('RESULT');
});