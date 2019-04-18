/*
    1) Tag Selector
    2) Class Selector
    3) Id Selector
    4) Attribute Selector

 */

// Tag Selector , ID Selector  , Class Selector
$('.orange1').click(function() {
    $(this).css({
        'background-color':'orange',
        'padding' : '10px',
        'margin':'10px',
        'box-shadow':'0 0 15px black'
    });
});

// Attribute Selector
let textBox = $('input[type="text"]');
textBox.focus(function() {
    $(this).css('background-color','lightblue');
});
textBox.blur(function() {
    $(this).css('background-color','white');
});

let passwordBox = $('input[type="password"]');
passwordBox.focus(function() {
    $(this).css('background-color','orange');
});
passwordBox.blur(function() {
    $(this).css('background-color','white');
});

