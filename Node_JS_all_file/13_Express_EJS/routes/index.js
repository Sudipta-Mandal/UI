const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express EJS' , page : 'index' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Us' , page : 'about' });
});


router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' , page : 'contact' });
});


router.get('/careers', function(req, res, next) {
    res.render('careers', { title: 'Lets start Careers with Us' , page : 'careers' });
});

module.exports = router;
