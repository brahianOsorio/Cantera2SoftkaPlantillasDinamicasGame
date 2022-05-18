const express = require('express');
const router = express.Router();

const User = require('../models/user')
const Game = require('../models/game')
// se crea la ruta del inicio del juego en donde se toma los datos de los jugadores y se crea el juego.
router.post('/', function (req,res,next){
    // se toman los datos del primer jugador
    const user = new User({
        name: req.body.nameOne

    });
    // se toman los datos del segundo jugador
    const userTwo = new User({
        name: req.body.nameTwo

    });
    // se toman los datos del tercer jugador
    const userThree = new User({
        name: req.body.nameThree
    });
    // se crea el juego con los 3 jugadores.
    const game = new Game({
        gamers: [ user , userTwo ,userThree],
        inProgres:'true',
        winner:null
    })


    // Se Guardan el juego y los Jugadores en la base de  datos
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

    //se crea la lista de los jugadores para mandarlas ala pagina de StarGame y llamamos ala pagina
    let listOfsGamers = [ user,userTwo,userThree ]
    res.render('StarGame',{ list : listOfsGamers });
})

module.exports = router;
