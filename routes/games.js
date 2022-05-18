const express = require('express');
const router = express.Router();

const Game = require('../models/game')
const User = require("../models/user");

router.post('/', function (req,res,next){
    //entontramos el juego por el id de la lista de los juegos
    const gameStatus= Game.findById(req.body.idGame);
        gameStatus.then((answer => {
            if (answer.winner == null ){
                const winnerDefault = new User({
                    name: 'vacio',
                    betAcomulated : 0
                });
                answer.winner = [winnerDefault];
            }
            res.render('statusGame', { object : answer } )
        }))
        .catch(mistake => console.log(mistake));

})

module.exports = router;