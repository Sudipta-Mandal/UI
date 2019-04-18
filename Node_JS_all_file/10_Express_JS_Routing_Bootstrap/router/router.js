const path = require('path');
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let users = [];

module.exports.mapRoutes = (app) => {
    // home page
    app.get('/',(request,response) => {
        response.render('index');
    });

    app.get('/about',(request,response) => {
        let employees = [
            {
                name : 'John',
                age : 40,
                designation : 'manager'
            },
            {
                name : 'Wilson',
                age : 35,
                designation : 'Tech Tead'
            },
            {
                name : 'Rajan',
                age : 25,
                designation : 'Software Engineer'
            }
        ];

        response.render('about' , {employees : employees});
    });

    // Query Strings
    app.get('/contact',(request,response) => {
        let query = request.query;
        console.log(query);
        response.render('contact',{users : users});
    });

    // Form Data
    app.post('/contact',urlencodedParser,(request,response) => {

        let user = {
            name : request.body.username,
            password : request.body.password,
            email : request.body.email
        };

        users.push(user);
        response.render('contact',{users:users});
    });

    // Query Parameters
    app.get('/careers/:id',(request,response) => {
        let params = request.params;
        console.log(params);
        response.render('careers',{params : params});
    });

    // 404 page
    app.use((request,response) => {
        response.render('404');
    });
};

