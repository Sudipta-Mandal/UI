/*  USE BS Cards
    1) Show + Hide => Toggle
    2) FadeIn + FadeOut => FadeToggle
    3) slideUp + SlideDown => SlideToggle
    4) animate
    5) Stop
 */

// Show Hide effects
// Hide + Show => Toggle
let hideCount = 0;
$('#button1').click(function() {
    if(hideCount % 2 === 0){
        $(this).text('SHOW');
        $('#card1').hide(1000);
        hideCount++;
    }
    else{
        $(this).text('HIDE');
        $('#card1').show(1000);
        hideCount++;
    }
});

// Toggle Effects
$('#button2').click(function() {
    let buttonText = $(this).text();
    if(buttonText === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
    $('#card2').toggle(1000);
});

// FadeIn , FadeOut effects
// FadeIn + FadeOut => FadeToggle
let fadeCount = 0;
$('#button3').click(function() {
    if(fadeCount % 2 === 0){
        $(this).text('FADEIN');
        $('#card3').fadeOut(1000);
        fadeCount++;
    }
    else{
        $(this).text('FADEOUT');
        $('#card3').fadeIn(1000);
        fadeCount++;
    }
});

// FadeToggle Effects
$('#button4').click(function() {
    let buttonText = $(this).text();
    if(buttonText === 'FADEOUT'){
        $(this).text('FADEIN');
    }
    else{
        $(this).text('FADEOUT');
    }
    $('#card4').fadeToggle(1000);
});

// SlideUp , SlideDown effects
// SlideUp + SlideDown => SlideToggle
let slideCount = 0;
$('#button5').click(function() {
    if(slideCount % 2 === 0){
        $(this).text('SLIDEDOWN');
        $('#card5').slideUp(1000);
        slideCount++;
    }
    else{
        $(this).text('SLIDEUP');
        $('#card5').slideDown(1000);
        slideCount++;
    }
});

// SlideToggle Effects
$('#button6').click(function() {
    let buttonText = $(this).text();
    if(buttonText === 'SLIDEUP'){
        $(this).text('SLIDEDOWN');
    }
    else{
        $(this).text('SLIDEUP');
    }
    $('#card6').slideToggle(1000);
});