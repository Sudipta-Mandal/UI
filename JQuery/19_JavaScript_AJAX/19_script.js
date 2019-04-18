// Click on the button
$('#JS-button').click(function () {
    javaScriptAJAX();
});

$('#JQuery-button').click(function () {
    jQueryAJAX();
});

// JQuery AJAX
let jQueryAJAX = () => {

    $.ajax({
        method : 'GET',
        url : 'https://gist.githubusercontent.com/thenaveensaggam/a42591ab5e4e0356c4c08c57af4b71e8/raw/dad36c1d5e40b6870ce61274d970329e1ae1a1b0/10012018.json',
        success : function(text) {
           processData(text);
        }
    });
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

let tableBodyElement = $('#table-body');
let prepareHTMLTags = (contacts) => {
    let tempRow = '';
    contacts.forEach((contact) => {
        let theRow = `<tr>
                         <td>${contact.id}</td>
                         <td>${contact.name.first} ${contact.name.last}</td>
                         <td>${contact.email}</td>
                         <td>${contact.dob}</td>
                         <td>${contact.location.city}</td>
                         <td>${contact.location.state}</td>
                         <td>${contact.location.postcode}</td>
                     </tr>`;
        tempRow += theRow;
    });
    tableBodyElement.empty().append(tempRow);
};

// Display Image on the page
$('#table-body tr').click(function() {
    alert($(this).val());
});