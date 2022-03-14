const express = require('express');
const router = express.Router();

const User = require('../models/user')
const Game = require('../models/game')

router.post('/', function (req,res,next){

    let game;
    const data = Game.find();
    data.then(answer => {
        game = answer[answer.length - 1 ];
        game.gamers[0].bet = req.body.betOne;
        game.gamers[1].bet = req.body.betTwo;
        game.gamers[2].bet = req.body.betThree;
        Game.findByIdAndUpdate(game.id , game )
            .then( console.log('actualizacion correcta'))
            .catch(mistake => res.json(mistake));
        res.render('statusGameMenu' , {gameToMenu: game });
    }).catch(mistake => res.json(mistake));
})

module.exports = router;
