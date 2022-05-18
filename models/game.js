const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//se crea el schema de mongoDb sobre el juego que posee a los jugadores, el estado del juego, y el ganador.
const GameSchema = new Schema({

    gamers: {
        type: [],
        required: [true, 'los Jugadores son requeridos']
    },
    inProgres:{
        type:String,
        trim: true
    },
    winner:{
        type: []
    }
});

module.exports = Game = mongoose.model('Game', GameSchema);