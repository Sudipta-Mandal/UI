/*
    1) Inline JQuery with a paragraph
    2) Internal JQuery with a Card
    3) External JQuery with a Card
 */

// External JQuery
$('#green-button').click(function() {
    let buttonText = $(this).text();
    if(buttonText === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
    $('#green-card').toggle();
});

// Buttons Logic
let messageElement = $('#message');
$('.btn-primary').click(function () {
    messageElement.text(reverseStr("Good Morning"));
});
$('.btn-success').click(function () {
    $('#message').text(reverseStr("Good Afternoon"));
});
$('.btn-warning').click(function () {
    $('#message').text(reverseStr("Good Evening"));
});
$('.btn-danger').click(function () {
    $('#message').text(reverseStr("Good Night"));
});

// reverseString
let reverseStr = (str) => {
    let tempStr = '';
    for(let i = str.length-1 ; i>=0  ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// JQuery forms
$('#user').keyup(function() {
    $('#display-text').text($(this).val());
});