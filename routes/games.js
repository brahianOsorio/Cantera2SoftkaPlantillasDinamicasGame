const express = require('express');
const router = express.Router();

const Game = require('../models/game')

router.post('/', function (req,res,next){

    const gameStatus= Game.findById(req.body.idGame);
        gameStatus.then((answer => {
            res.render('statusGame', { object : answer } )
        }))
        .catch(mistake => console.log(mistake));

})

module.exports = router;