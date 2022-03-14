const express = require('express');
const router = express.Router();

const User = require('../models/user')



router.get('/', function(req, res, next) {
    res.render('layoutAdd' );
});

router.get('/add', function(req, res, next) {
    const data = User.find();
    data.then((answer => res.json(answer)))
        .catch(mistake => console.log(mistake));
});

module.exports = router;
