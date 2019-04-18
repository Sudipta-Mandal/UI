// Get the HTML Elements
const clapSound = document.querySelector('#sound');
const congratsSound = document.querySelector('#congrats');
const originalTextElement = document.querySelector('.text-section-div p');
const textAreaElement = document.querySelector('#text-area');
const textAreaBorder = document.querySelector('#text-area');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const resetButton = document.querySelector('#reset');
const congratsMessageElement = document.querySelector('.cong-section');
const textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
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
let interval = 0;
let timerRunning = false;

// Keyup event for TextArea
textAreaElement.addEventListener('keyup',function() {
    let textEnteredLength = textAreaElement.value.length;
    let originalText = originalTextElement.textContent;
    let textEntered = textAreaElement.value;
    let partialText = originalText.substr(0,textEntered.length);

    callTimer(textEnteredLength);
    checkTheTyping(originalText,textEntered,partialText);
});

// Reset Button Logic
resetButton.addEventListener('click',function() {
    clearInterval(interval);
    clearVariables();
    changeBorder('gray');
    // hide the message
    congratsMessageElement.style.display = 'none';
    // get the randomString
    getRandomString();
});

let callTimer = (length) => {
    if(length === 1 && !timerRunning){
        // start the timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
};

let checkTheTyping = (originalText,textEntered,partialText) => {
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
            // play congrats Sound
            congratsSound.play();
        }
        else{
            if(textEntered === partialText){
                // blue
                changeBorder('lightblue');
            }
            else{
                // red
                changeBorder('orangered');
                clapSound.play();
            }
        }
    }
};

let clearVariables = () => {
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning = false;
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    textAreaElement.value = '';
};

// changeBorder color
let changeBorder = (color) => {
    textAreaBorder.style.borderColor = color;
    textAreaBorder.style.boxShadow = `0 0 10px ${color}`;
};

// start Timer Function
let startTimer = () => {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes).toString();
    secondsElement.textContent = leadingZero(seconds).toString();
    timer++;
};

// leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
};

// getRandom String
let getRandomString = () => {
    let randomNumber = Math.round(Math.random() * 10);
    let randomStr = textArray[randomNumber];
    originalTextElement.textContent = randomStr.trim();
};
