const express = require('express');
const  app = express();
const routes = require('./router/router');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const  hostname = '127.0.0.1';
const port = 3000;

// Make the public as a static folder
app.use('/public',express.static('public'));

// Use EJS As our template engine
app.set('view engine', 'ejs');

// Send all the routes to router
routes.mapRoutes(app);

app.listen(port,hostname,() => {
    console.log(`Server is started at http://${hostname}:${port}`);
});