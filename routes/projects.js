var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('projects', { title: 'Some of my work' });
});

module.exports = router;
