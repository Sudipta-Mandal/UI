/*
    1) Click Event for a button BS Styles
    2) dblClick event for a button BS Styles
    3) Hover on an Image with opacity
    4) Focus Event & blur Event
    5) MouseEnter Event to show a BS Modal
 */

// Click event
$('#login-button').click(function() {
    $(this).removeClass('btn-success').addClass('btn-danger').text('Register');
});

// dbl click
$('#register-button').dblclick(function() {
    $(this).removeClass('btn-danger').addClass('btn-success').text('Login');
});

// Toggle button
let toggleCount = 0;
$('#toggle-button').click(function() {
    if(toggleCount % 2 === 0){
        $(this).removeClass('btn-success').addClass('btn-danger').text('Register');
        toggleCount++;
    }
    else{
        $(this).removeClass('btn-danger').addClass('btn-success').text('Login');
        toggleCount++
    }
});

// Hover effect on image
$('img').hover(function() {
    $(this).css('opacity','0.5');
});

// MouseEnter on an button
$('#blue-button').mouseenter(function() {
    $('#hover-modal').modal('show');
});
