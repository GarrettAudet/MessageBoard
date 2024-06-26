var express = require('express');
var router = express.Router();
const { messages } = require('./index.js');
  
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('new', { 
        title: "Movie Messageboard", 
    });
});

/* POST new message form submission */
router.post('/', function(req, res, next) {
    var author = req.body.messageUser;
    var message = req.body.messageText;
    messages.push({text: message, user: author, added: new Date()});
    res.redirect('/');
});

module.exports = router;