const path = require('path');
const express = require('express');
const  app = express();

const  hostname = '127.0.0.1';
const port = 3000;

// Send plain text / HTML code
app.get('/',(request,response) => {
    response.send(`<h1 style="color: green">Welcome to Express JS</h1>`);
});

// Send HTML file
app.get('/home',(request,response) => {
    response.sendFile(path.join(__dirname, 'home.html'));
});

let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager'
};

// send a JSON file
app.get('/json',(request,response) => {
    response.json(employee);
});

// Download a file
app.get('/download',(request,response) => {
    response.download(path.join(__dirname, 'abc.pdf'));
});

app.listen(port,hostname,() => {
    console.log(`Server is started at http://${hostname}:${port}`);
});
