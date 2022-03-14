const express = require('express');
const router = express.Router();


const Game = require('../models/game')


router.get('/', function(req, res, next) {
    const positionOfWinner = Math.round(Math.random() * 3)
    const getWinner = Game.find();
    var gameFinal;
    var playerWinner;
    var accumulatedOfBets;
    getWinner.then(answer => {
        gameFinal = answer[answer.length - 1 ]
        accumulatedOfBets = Number(gameFinal.gamers[0].bet) + Number(gameFinal.gamers[1].bet) + Number(gameFinal.gamers[2].bet);
        playerWinner = gameFinal.gamers[positionOfWinner];
        res.render('final' ,{ winner : playerWinner, accumulated : accumulatedOfBets } )
    }).catch(mistake => console.log(mistake))



});



module.exports = router;