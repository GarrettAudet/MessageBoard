var express = require('express');
var router = express.Router();
  
/* GET home page. */
router.get('/new', function(req, res, next) {
    res.render('form', { 
        title: "Movie Messageboard", 
    });
});

/* POST new message form submission */
router.post('/new', function(req, res, next) {
    var author = req.body.author;
    var message = req.body.messageText;

    res.redirect('/');
});

module.exports = router;