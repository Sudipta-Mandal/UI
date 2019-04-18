const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express JS' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Us' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
