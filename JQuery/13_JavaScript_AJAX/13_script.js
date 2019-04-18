let getAJAX = () => {
    javaScriptAJAX();
};

// JavaScript AJAX
let javaScriptAJAX = () => {
    // Create a AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the request
    http.open('GET','https://gist.githubusercontent.com/thenaveensaggam/a42591ab5e4e0356c4c08c57af4b71e8/raw/dad36c1d5e40b6870ce61274d970329e1ae1a1b0/10012018.json',true);

    // Send  the request
    http.send();

    // Track the request
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200){
            theText = http.responseText;
            processData(theText);
        }
    };
};

let processData = (text) => {
    let jsonData = JSON.parse(text);
    prepareHTMLTags(jsonData.contacts);
};

let imageTagsDiv = document.querySelector('#image-gallery-div');
let prepareHTMLTags = (contacts) => {
    let imageTags = '';
    contacts.forEach((contact) => {
        let imageTag = `<img src="${contact.picture.large}">`;
        imageTags += imageTag;
    });
    console.log(imageTags);
    imageTagsDiv.innerHTML = imageTags;
};
