const express = require('express');
const router = express.Router();

const User = require('../models/user')
const Game = require('../models/game')

router.post('/', function (req,res,next){

    const user = new User({
        name: req.body.nameOne

    });
    const userTwo = new User({
        name: req.body.nameTwo

    });
    const userThree = new User({
        name: req.body.nameThree
    });

    const game = new Game({
        gamers: [ user , userTwo ,userThree],
        inProgres:'true',
        winner:null
    })



    game.save().then(answer => console.log("seguardo El Game"))
        .catch(mistake => res.json(mistake));


    user.save()
        .then(answer => console.log("seguardo El usuario1"))
        .catch(mistake => res.json(mistake));
    userTwo.save()
        .then(answer => console.log("seguardo El usuario2"))
        .catch(mistake => res.json(mistake));
    userThree.save()
        .then(answer => console.log("seguardo El usuario3"))
        .catch(mistake => res.json(mistake));


    let listOfsGamers = [ user,userTwo,userThree ]
    res.render('StarGame',{ list : listOfsGamers });
})

module.exports = router;
