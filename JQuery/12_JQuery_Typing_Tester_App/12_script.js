// Get the HTML Elements
let originalTextElement = $('#original-text');
let textAreaElement = $('#text-area');
let messageCardElement = $('#message-card');
let messageElement = $('#message');
let minutesElement = $('#minutes');
let secondsElement = $('#seconds');
let milliSecondsElement = $('#milli-seconds');
let resetButton = $('#reset-button');
let textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

let timer = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;
let timerRunning = false;

// Keypress event for text-area
textAreaElement.keypress(function() {
    let textEnteredLength = $(this).val().length;
    if(textEnteredLength === 0 && !timerRunning){
        // start the timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

// keyup event for text-area
textAreaElement.keyup(function() {
    let originalText = originalTextElement.text();
    let textEntered = $(this).val();
    let partialText = originalText.substr(0,textEntered.length);
    if(textEntered === ''){
        // gray
        messageCardElement.removeClass('bg-primary')
                           .removeClass('bg-success')
                             .removeClass('bg-danger')
                                .addClass('bg-light');
        messageElement.text('');

    }
    else{
        if(textEntered === originalText){
            // green
            messageCardElement.removeClass('bg-primary')
                             .removeClass('bg-light')
                             .removeClass('bg-danger')
                             .addClass('bg-success');
            messageElement.text('Congratulations');
            // stop the timer
            clearInterval(interval);
        }
        else{
            if(textEntered === partialText){
                //blue
                messageCardElement.removeClass('bg-success')
                                    .removeClass('bg-light')
                                     .removeClass('bg-danger')
                                    .addClass('bg-primary');
                messageElement.text('Correct!!');
            }
            else{
                // red
                messageCardElement.removeClass('bg-success')
                                 .removeClass('bg-light')
                                  .removeClass('bg-primary')
                                  .addClass('bg-danger');
                messageElement.text('Wrong!!');
            }
        }
    }
});

// Reset Button Logic
resetButton.click(function() {

    // Stop the timer
    clearInterval(interval);

    // reset all the variables
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    timerRunning = false;

    // clear the message
    messageCardElement.removeClass('bg-primary')
        .removeClass('bg-success')
        .removeClass('bg-danger')
        .addClass('bg-light');
    messageElement.text('');

    // Clear the text entered
    textAreaElement.val('');

    // Reset the timer elements
    minutesElement.text('00');
    secondsElement.text('00');
    milliSecondsElement.text('00');

    // Generate the random text
    generateRandomText();
});


let startTimer = () => {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.text(leadingZero(minutes));
    secondsElement.text(leadingZero(seconds));
    milliSecondsElement.text(leadingZero(milliSeconds));
    timer++;
};

let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
};

// Generate RandomText
let generateRandomText = () => {
    let random = Math.round(Math.random() * 10);
    let randomText = textArray[random];
    originalTextElement.text(randomText);
};