var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/*GET Alpha Access page */
router.get('/alpha_access', function(req, res, next) {
  res.render('alpha_access', { title: 'Alpha Access' });
});

/*GET About Us page */
router.get('/about_us', function(req, res, next) {
  res.render('about_us', { title: 'About Us' });
});

/*GET Contact Us page */
router.get('/contact_us', function(req, res, next) {
  res.render('contact_us', { title: 'Contact Us' });
});


module.exports = router;
