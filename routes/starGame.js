const express = require('express');
const router = express.Router();

const User = require('../models/user')
const Game = require('../models/game')
// se actualiza las apuestas de los jugadores del juego
router.post('/', function (req,res,next){

    let game;
    // se traen los juegos guardados en la base de datos
    const data = Game.find();

    data.then(answer => {
        //se toma el ultimo juego guardado el cual corresponde al juego actual
        game = answer[answer.length - 1 ];
        //se modifica las apuestas de los jugadores implicados en el juego
        game.gamers[0].bet = req.body.betOne;
        game.gamers[1].bet = req.body.betTwo;
        game.gamers[2].bet = req.body.betThree;
        // se guardan los datos de los jugadores ya modificados
        Game.findByIdAndUpdate(game.id , game )
            .then( console.log('actualizacion correcta'))
            .catch(mistake => res.json(mistake));
        res.render('statusGameMenu' , {gameToMenu: game });
    }).catch(mistake => res.json(mistake));
})

module.exports = router;
