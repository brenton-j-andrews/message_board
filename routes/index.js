// WEBSITE ROUTING PAGE.

var express = require('express');
var router = express.Router();

// Controller module import.
let controller = require("../controllers/index");

// GET home page.
router.get('/', function(req, res, next) {
  console.log("below this: ")
  console.log(req.user);
  res.render('index', { user : req.user });
});

// GET request for user login page.
router.get('/login', controller.user_login_get);

// POST request for user login page.
router.post('/login', controller.user_login_post);

// GET request for user sign up page.
router.get('/sign-up', controller.sign_up_get);

// POST request for user sign up page.
router.post('/sign-up', controller.sign_up_post);



module.exports = router;
