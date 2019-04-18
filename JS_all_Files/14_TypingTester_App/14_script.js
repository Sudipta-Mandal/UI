// Get the HTML Elements
var originalTextElement = document.querySelector('.text-section-div p');
var textAreaElement = document.querySelector('#text-area');
var textAreaBorder = document.querySelector('#text-area');
var minutesElement = document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds');
var resetButton = document.querySelector('#reset');
var congratsMessageElement = document.querySelector('.cong-section');
var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
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


var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
var timerRunning = false;

// Add Event Listener for TextArea
textAreaElement.addEventListener('keypress',function() {
    var textEnteredLength = textAreaElement.value.length;
    if(textEnteredLength === 0 && !timerRunning){
        // start the timer
       interval = setInterval(startTimer,10);
       timerRunning = true;
    }
});

// Keyup event for TextArea
textAreaElement.addEventListener('keyup',function() {
    var originalText = originalTextElement.textContent;
    var textEntered = textAreaElement.value;
    var partialText = originalText.substr(0,textEntered.length);
    if(textEntered === ''){
        // gray
        changeBorder('gray');
    }
    else{
        if(textEntered === originalText){
            // green
            changeBorder('seagreen');
            // stop the timer
            clearInterval(interval);
            // display Congrats Message
            congratsMessageElement.style.display ='block';
        }
        else{
            if(textEntered === partialText){
                // blue
                changeBorder('lightblue');
            }
            else{
                // red
                changeBorder('orangered');
            }
        }
    }
});

// Reset Button Logic
resetButton.addEventListener('click',function() {
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning = false;
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    textAreaElement.value = '';
    changeBorder('gray');
    // hide the message
    congratsMessageElement.style.display = 'none';
    // get the randomString
    getRandomString();
});

// changeBorder color
function changeBorder(color) {
    textAreaBorder.style.borderColor = color;
}

// start Timer Function
function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes).toString();
    secondsElement.textContent = leadingZero(seconds).toString();
    timer++;
}

// leading Zero
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}

// getRandom String
function getRandomString() {
    var randomNumber = Math.round(Math.random() * 10);
    var randomStr = textArray[randomNumber];
    originalTextElement.textContent = randomStr;
}
