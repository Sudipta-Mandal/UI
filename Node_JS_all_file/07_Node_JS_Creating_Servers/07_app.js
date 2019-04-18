const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a node js server
const hostname = '127.0.0.1';
const port = 3000;

let server = http.createServer((request,response) => {
    let url = request.url;
    response.statusCode = 200; // OK
    response.setHeader('Content-Type', 'text/html');

    if(url === '/'){
        fs.readFile(path.join(__dirname , 'home.html'),'utf8',(err,data)=> {
            if(err) throw err;
            response.end(data);
        });
    }
    else{
        response.end(`<h1 style="color: red">Page Not Found</h1>`);
    }
});

server.listen(port,hostname,() => {
    console.log(`Server is started at http://${hostname}:${port}`);
});
