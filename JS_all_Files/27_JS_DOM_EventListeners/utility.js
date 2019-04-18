function triangleOne(str) {
    var tempStr = '';
    for(var i=0; i<str.length; i++){
        tempStr += str.substr(0,i+1) + '\n';
    }
    return tempStr;
}

function triangleTwo(str) {
    var tempStr = '';
    for(var i=0; i<= str.length-1; i++){
        tempStr += addSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}

function addSpace(number) {
    var tempSpace = '';
    for(var i=0; i<number;i++){
        tempSpace += ' ';
    }
    return tempSpace;
}

function triangleThree(str) {
    var tempStr = '';
    for(var i=str.length; i>0; i--){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}