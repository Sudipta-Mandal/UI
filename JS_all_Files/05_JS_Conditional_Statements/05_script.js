// If Else condition Example
var courseCompleted = true;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You Will get the job soon');
}
else if(courseCompleted && !practiceCompleted){
    console.log('Please practice the Course');
}
else {
    console.log('Please join some courses');
}

// Traffic Signal Conditions
var redLight = true;
var greenLight = true;
var policeWatching = true;
if(redLight && policeWatching){
    console.log('Please stop your Vehicle');
}
else if(redLight && !policeWatching){
    console.log('Check the traffic an Move');
}
else if(greenLight){
    console.log('Please move your vehicle');
}
else{
    console.log('Do Nothing');
}

// Switch Statement
var today = new Date().getDay();
var message = 'Today is : ' ;
switch(today){
    case 0:
        message += 'Sunday';
        break;
    case 1:
        message += 'Monday';
        break;
    case 2:
        message += 'Tuesday';
        break;
    case 3:
        message += 'Wednesday';
        break;
    case 4:
        message += 'Thursday';
        break;
    case 5:
        message += 'Friday';
        break;
    case 6:
        message += 'Saturday';
        break;
    default:
        message += 'no - day';
        break;
}
console.log(message);


// For loop Example to display from 1 - 10 values
var output = '';
for(var i=1; i<=10; i++){
    if(i <= 9){
        output = output + i  + " , ";
    }
    else{
        output = output + i ;
    }
}
console.log(output);

// print the values from 20 to 0
output = '';
for(var i = 20; i >= 0 ; i--){
    if(i > 0){
        output += i + ' , ';
    }
    else{
        output += i ;
    }
}
console.log(output);

// Print 10 starts start from 1
output = '';
for(var i = 1; i<= 10; i++){
    for(var j = 1 ; j <= i ; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);


// While loop Example to display from 1 - 10 values
output = '';
var i = 1;
while(i <= 10){
    if(i <= 9){
        output = output + i  + " - ";
    }
    else{
        output = output + i ;
    }
    i++;
}
console.log(output);

// While loop Example to display from 20 - 0 values
output = '';
var i = 20;
while(i >= 0){
    if(i > 0){
        output += i + ' - ';
    }
    else{
        output += i ;
    }
    i--;
}
console.log(output);

// Print 10 Stars using While Loop
output = '';
var i = 1;
while(i<= 10){
    var j = 1;
    while(j <= i){
        output += '-';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Do while loop Example to display from 1 - 10 values
output = '';
var i = 1;
do{
    if(i <= 9){
        output = output + i  + " ^ ";
    }
    else{
        output = output + i ;
    }
    i++;
}
while(i <= 10);
console.log(output);

// Do while loop Example to display from 20 - 0 values
output = '';
var i = 20;
do{
    if(i > 0){
        output += i + ' ^ ';
    }
    else{
        output += i ;
    }
    i--;
}
while(i >= 0);
console.log(output);

// Do - While to print 10 stars
output = '';
var i = 1;
do{
    var j = 1;
    while(j <= i){
        output += '^';
        j++;
    }
    output += '\n';
    i++;
}
while(i<= 10);
console.log(output);