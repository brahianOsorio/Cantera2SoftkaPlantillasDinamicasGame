const express = require('express');
const router = express.Router();


const Game = require('../models/game')
const User = require('../models/user')


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
        playerWinner.betAcomulated = accumulatedOfBets;
        //se actualiza los datos en la base de datos
        gameFinal.winner = [playerWinner];
        gameFinal.inProgres = 'false';
        Game.findByIdAndUpdate(gameFinal.id,gameFinal)
            .then( console.log('actualizacion correcta'))
            .catch(mistake => res.json(mistake));
        User.findByIdAndUpdate(playerWinner.id,playerWinner)
            .then( console.log('actualizacion correcta'))
            .catch(mistake => res.json(mistake));

        res.render('final' ,{ winner : playerWinner, accumulated : accumulatedOfBets } )
    }).catch(mistake => console.log(mistake))



});



module.exports = router;